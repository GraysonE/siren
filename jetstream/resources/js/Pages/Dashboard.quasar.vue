<template>
    <q-layout view="hHh lpr fFf">

        <q-drawer v-model="right" side="right" elevated overlay>
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>

        <q-footer reveal bordered class="bg-primary text-white">
            <q-btn dense flat round icon="menu" @click="right = !right"/>
            <BottomNav></BottomNav>
        </q-footer>

    </q-layout>
</template>

<script>
import BottomNav from '@/Quasar/layouts/BottomNav.vue'

export default {
    name: 'MainLayout',
    components: {BottomNav},
    data() {
        return {
            right: false
        }
    },
}
</script>

<style>
.q-btn {
    float: right;
    margin: 5px 5px 0 0;
}
</style>
