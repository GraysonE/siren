<template>
  <q-page class="flex flex-center">
    <h2>Siren</h2>
    <button @click="play">Play</button>
    <button @click="stop">Stop</button>
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
      mainLoop: null,
      loops: [],
      synths: [],
      bpm: 240,
      now: null,
    }
  },
  mounted() {
    this.load_midi();
  },
  methods: {
    build() {

      this.currentMidi.header.tempos.forEach((tempo) => {
        tempo.bpm = this.bpm
        this.currentMidi.header.update();
      });
      this.playing = true;
      console.log(this.currentMidi);

      if (this.playing && this.currentMidi) {
        this.currentMidi.tracks.forEach((track) => {

          console.log(track)

          this.now = Tone.now() + 0.1;

          //create a synth for each track
          const synth = new Tone.PolySynth(Tone.Synth, {
            envelope: {
              attack: 0.02,
              decay: 0.1,
              sustain: 0.3,
              release: 1,
            },
          }).toDestination();
          this.synths.push(synth);

          // this.mainLoop = new Tone.Loop(time => {
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


    },
    loop(track, synth) {
      //schedule all of the events
      track.notes.forEach((note) => {
        synth.triggerAttackRelease(
          note.name,
          note.duration,
          note.time + this.now,
          note.velocity
        );
      });
    },
    play() {
      this.build();
      Tone.Transport.start();
    },
    stop() {
      Tone.Transport.stop();
    },
    async load_midi() {
      // load a midi file in the browser
      this.currentMidi = await Midi.fromUrl("/midi/Octave.mid")
    }
  }
};
</script>
