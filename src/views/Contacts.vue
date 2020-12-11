<template>
  <div class="contacts"  v-bind:style="{backgroundImage: `url(https://images.unsplash.com/photo-1604339452972-a6e47abfe767?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80)`}">
    <h2 class="text-center">Способы связи со мной:</h2>
    <v-row>
      <v-col class="text-center"><h2>Телеграм: @al****zh</h2></v-col>
      <v-col class="text-center"><h2>Почта: al*****zh@hotmail.com</h2></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  components: {
  },
};
</script>

<style>
.contacts {
  background-color: #A67E6F;
  height: 100%;
  color: white;
}
</style>
