<template>
  <div>
    <h3>Practice</h3>
    <div class="wrap">
      <button @click="play">Play</button>
    </div>
  </div>
</template>

<script>

var Tone = require('tone');
import {Midi} from '@tonejs/midi'

// const player = new Tone.Player("/assets/midi/Octave.mid").toDestination();
// play as soon as the buffer is loaded
// player.autostart = true;
const sampler = new Tone.Sampler({
  urls: {
    //   A1: "A1.mp3",
    //   A2: "A2.mp3",
    //   Octave: "/assets/midi/Octave.mid"
  },
  baseUrl: "https://tonejs.github.io/audio/casio/",
  onload: () => {
    sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
  }
}).toDestination();


export default {
  name: 'Practice',
  data() {
    return {}
  },
  mounted() {

   this.load_midi();
  },
  methods: {
    async play() {
      console.log('hi')
      await Tone.start()


    },
    async load_midi() {
      // load a midi file in the browser
      const midi = await Midi.fromUrl("/assets/midi/Octave.mid")
//the file name decoded from the first track
      const name = midi.name
//get the tracks
      midi.tracks.forEach(track => {
        //tracks have notes and controlChanges

        //notes are an array
        const notes = track.notes
        notes.forEach(note => {
          //note.midi, note.time, note.duration, note.name
        })

        //the control changes are an object
        //the keys are the CC number
        track.controlChanges[64]
        //they are also aliased to the CC number's common name (if it has one)
        track.controlChanges.sustain.forEach(cc => {
          // cc.ticks, cc.value, cc.time
        })

        //the track also has a channel and instrument
        //track.instrument.name
      })
    }
  }
};
</script>

<style scoped>

</style>
