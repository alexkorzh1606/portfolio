<template>
  <div class="portfolio">
        <h2 class="text-center">Выполненные в ходе обучения проекты:</h2>
        <Projects v-for="item in projects"
            :key="item.index"
            :title="item.title"
            :description="item.description"
            :img="item.img"
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
  height: 100%;
}
</style>
