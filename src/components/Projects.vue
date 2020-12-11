<template>
<v-row>
    <v-col align="center">
  <v-card tile color="rgba(255, 255, 255, 0.5)" class="card">
      <h3>{{title}}</h3>
      <p>{{description}}</p>
      <p>{{link}}</p>
      <a v-bind:href="gitLink" target='blank'>GitHub репозиторий</a>
  </v-card>
      </v-col>
</v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Projects',
  props: {
    title: String,
    description: String,
    link: String,
    gitLink: String,
  },
  computed: {
    ...mapGetters([
      'projects',
    ]),
  },
};
</script>

<style>
.card {
  width: 30%;
}
</style>
