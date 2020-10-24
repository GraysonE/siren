<template>
  <q-page dark class="window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <q-card square class="q-pa-lg ">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="email" type="email" label="email"/>
              <q-input square filled clearable v-model="password" type="password" label="password"/>
            </q-form>
          </q-card-section>
<!--          <q-card-section class="row">-->
<!--            <div class="text-center q-pa-md q-gutter-md">-->
<!--              <q-btn round color="indigo-7">-->
<!--                <q-icon name="fab fa-facebook-f" size="1.2rem"/>-->
<!--              </q-btn>-->
<!--              <q-btn round color="red-8">-->
<!--                <q-icon name="fab fa-google-plus-g" size="1.2rem"/>-->
<!--              </q-btn>-->
<!--              <q-btn round color="light-blue-5">-->
<!--                <q-icon name="fab fa-twitter" size="1.2rem"/>-->
<!--              </q-btn>-->
<!--            </div>-->
<!--          </q-card-section>-->
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="secondary" size="lg" class="full-width" label="Login" @click="login"/>
          </q-card-actions>
          <q-card-section class="float-left q-pa-none">
            <router-link
              to="/register"
              class="text-white"
            >Create an Account
            </router-link>
          </q-card-section>
          <q-card-section class="float-right q-pa-none">
            <router-link
              to="/forgot"
              class="text-white"
            >Forgot Password?
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
      password: ''
    }
  },
  methods: {
    login() {
      
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
