<template>
  <div class="portfolio"  v-bind:style="{backgroundImage: `url(https://images.unsplash.com/photo-1604339452972-a6e47abfe767?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80)`}">
    <h2 class="text-center">Выполненные в ходе обучения проекты:</h2>
    <Projects v-for="item in projects"
            :key="item.index"
            :title="item.title"
            :description="item.description"
            :link="item.link"
            :gitLink="item.gitLink"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Projects from '../components/Projects.vue';

export default {
  name: 'Portfolio',
  components: {
    Projects,
  },
  computed: {
    ...mapGetters([
      'projects',
    ]),
  },
};
</script>

<style>
.portfolio {
  background-color: #A67E6F;
  height: 100%;
  color: white;
}
</style>
