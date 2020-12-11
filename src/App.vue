<template>
  <v-app>
    <v-app-bar
      app
      color="#1C2326"
      dark
      >
      <v-btn
        to='/'
        text
      >
        <span class="text-center">ОБО МНЕ</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        to='/portfolio'
        text
      >
        <span class="text-center">ПРОЕКТЫ</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        to='/contacts'
        text
      >
        <span class="text-center">КОНТАКТЫ</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
