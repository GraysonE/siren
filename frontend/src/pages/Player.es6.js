import {Midi} from '@tonejs/midi';

class Player {

  currentMidi = mainLoop = now = null;
  playing = false;
  loops = synths = orig_notes = [];
  bpm = 240;
  midi_offset = 0

  constructor(Tone) {
    this.Tone = Tone;
  }

  build() {
    this.currentMidi.header.tempos.forEach((tempo) => {
      tempo.bpm = this.bpm
      this.currentMidi.header.update();
    });
    this.playing = true;
    console.log(this.currentMidi);

    if (this.playing && this.currentMidi) {


      this.midi_offset++; // increase note pitches
      console.log(this.midi_offset)

      this.currentMidi.tracks.forEach((track) => {

        console.log(track)

        this.now = this.Tone.now() + 0.1;

        //create a synth for each track
        const synth = new this.Tone.PolySynth(this.Tone.Synth, {
          envelope: {
            attack: .01,
            decay: 0.1,
            sustain: 0.3,
            release: 1,
          },
        }).toDestination();
        this.synths.push(synth);

        track.notes.forEach((note, i) => {
          this.orig_notes[i] = note.midi;
        });

        // this.mainLoop = new this.Tone.Loop(time => {
        this.loop(track, synth);
        // }, "1n").start(0);

      });
    } else {
      //dispose the synth and make a new one
      while (this.synths.length) {
        const synth = this.synths.shift();
        synth.dispose();
      }
    }


  }

  loop(track, synth) {
    //schedule all of the events
    track.notes.forEach((note, i) => {
      note.midi = this.orig_notes[i] + this.midi_offset;
      console.log(note)
      synth.triggerAttackRelease(
        note.name,
        note.duration,
        note.time + this.now,
        note.velocity
      );
    });
  }



  play() {

    this.build();
    this.Tone.Transport.start();
  }

  stop() {
    console.log('stop')
    this.Tone.Transport.stop();
  }

  async load_midi() {

    // load a midi file in the browser
    this.currentMidi = await Midi.fromUrl("/midi/Octave.mid")
  }

}

export default Player;
