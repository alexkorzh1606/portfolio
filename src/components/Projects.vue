<template>
<v-row>
    <v-col align="center">
  <v-card tile color="rgba(255, 255, 255, 0.0)" class="card">
      <h3 class="white--text">{{title}}</h3>
      <p class="white--text">{{description}}</p>
      <p class="white--text">{{link}}</p>
      <a v-bind:href="gitLink" target='blank' class="white--text">GitHub репозиторий</a>
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
  color: white;
}
</style>
