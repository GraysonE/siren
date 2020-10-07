<template>
  <q-tabs slot="footer"
          v-model="tab"
          class="bg-primary text-white shadow-2"
  >
    <q-route-tab v-for="(nav, key) in navs" :icon="nav.icon" :to="nav.route" :key="key"></q-route-tab>
  </q-tabs>
</template>

<script>

export default {
  name: 'BottomNav',
  data() {
    return {
      navs: [
        {
          route: '/',
          text: 'Home',
          icon: 'home'
        },
        {
          route: '/practice',
          text: 'Practice',
          icon: 'record_voice_over'
        },
        {
          route: '/discover',
          text: 'Discover',
          icon: 'explore'
        },
        {
          route: '/settings',
          text: 'Settings',
          icon: 'settings'
        },
      ]
    }
  }
};
</script>

<style scoped>

</style>
