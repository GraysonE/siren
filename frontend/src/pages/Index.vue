<template>
  <q-page class="flex flex-center">
    <h2>Siren</h2>
    <div style="width: 100%;">
      <button @click="play">Play</button>
      <button @click="pause">Pause</button>
      <button @click="stop">Stop</button>
    </div>
  </q-page>
</template>

<script>
var Tone = require('tone');
import {Midi} from '@tonejs/midi';


export default {
  name: 'PageIndex',
  data() {
    return {
      currentMidi: null,
      playing: false,
      midi_loop: null,
      synth: {},
      bpm: 180,
      now: null,
      midi_offset: 0,
      midi_sequence: null,
      orig_notes: [],
      event_id: null,
    }
  },
  async mounted() {

    await this.load_midi();
    this.set_synth();

    Tone.Transport.bpm.value = this.bpm;
  },
  methods: {
    set_synth() {
      console.log(this.currentMidi)
      this.currentMidi.tracks.forEach((track) => {

        console.log(track)

        this.now = Tone.now() + 0.1;

        //create a synth for each track
        this.synth = new Tone.PolySynth(Tone.Synth, {
          envelope: {
            attack: .01,
            decay: 0.1,
            sustain: 0.3,
            release: 1,
          },
        }).toDestination();

        track.notes.forEach((note, i) => {
          this.orig_notes[i] = note.midi;
        });

      });
    },
    build() {

      this.currentMidi.header.tempos.forEach((tempo) => {
        tempo.bpm = this.bpm
        this.currentMidi.header.update();
      });

      console.log(Tone.Transport.bpm.value)
      console.log(this.currentMidi);
      this.playing = true;

      if (this.playing && this.currentMidi) {

        this.currentMidi.tracks.forEach((track) => {

          console.log(track)

          this.now = Tone.now() + 0.1;
          // let time = Tone.now()

          // Part is a collection ToneEvents which can be started/stopped and looped as a single unit.
          // this.midi_sequence = new Tone.Part(((time, value) => {
          //   this.synths.forEach((synth, i) => {
          //
          //
          //     value.midi = this.orig_notes[i] + this.midi_offset;
          //
          //     // the value is an object which contains both the note and the velocity
          //     synth.triggerAttackRelease(value.note, value.duration, time, value.velocity);
          //
          //   });
          //
          // }), track.notes).start(0)
          //
          // this.midi_sequence.loop = 1;

          this.midi_offset = 0;
          this.midi_loop = null;

          this.midi_loop = new Tone.Loop(() => {
            this.loop(track);
          }, "+4m").start(0);

          this.midi_loop.debug = true;
          console.log(this.synth)
          console.log(this.midi_loop);


        });
      }

    },
    loop(track) {

      this.midi_offset++; // increase note pitches

      track.notes.forEach((note, i) => {

        // Increase note pitch by a half step
        note.midi = this.orig_notes[i] + this.midi_offset;

        this.synth.triggerAttackRelease(
          note.name,
          note.duration,
          note.time + Tone.now(),
          note.velocity
        );
      });
    },
    play() {
      this.build();
      Tone.start();
      Tone.Transport.start();
    },
    pause() {

    },
    stop() {
      // TODO: stop immediately!
      Tone.Transport.stop();
      // this.synth.stop();
      this.midi_loop.stop();
    },
    async load_midi() {
      // load a midi file in the browser
      this.currentMidi = await Midi.fromUrl("/midi/Octave.mid")
    },

    next() {

    },

    previous() {

    },

  }
}
</script>
