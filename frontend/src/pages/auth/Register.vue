<template>
  <q-page dark class="window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <q-card square class="q-pa-lg ">
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input square clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="username" type="username" label="Username">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="secondary" size="lg" class="full-width" label="Register"/>
          </q-card-actions>
            <q-card-section class="qa-pa-lg">
              <router-link
                to="/login"
                class="text-white text-center"
              >Back to login
              </router-link>
            </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      username: '',
      password: ''
    }
  }
}
</script>

<style>
.q-card {
  width: 400px;
  margin: 0 auto;
}
</style>
