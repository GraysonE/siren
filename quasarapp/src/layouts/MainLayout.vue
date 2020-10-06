<template>
    <q-layout view="hHh lpr fFf">

      <q-header reveal elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="left = !left" />

          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            Siren
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer show-if-above v-model="left" side="left" elevated>
        <!-- drawer content -->
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer reveal bordered class="bg-primary text-white">
        <BottomNav></BottomNav>
      </q-footer>

    </q-layout>
</template>

<script>
import BottomNav from 'layouts/BottomNav';

export default {
  name: 'MainLayout',
  components: { BottomNav },
  data () {
    return {
      leftDrawerOpen: false,
      left: false
    }
  }
}
</script>
