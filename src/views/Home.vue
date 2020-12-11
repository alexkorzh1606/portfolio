<template>
  <div class="home" v-bind:style="{backgroundImage: `url(https://images.unsplash.com/photo-1604339452972-a6e47abfe767?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80)`}">
    <h1 class="text-center">{{titleText}}</h1>
    <h2 class="text-center">{{subtitleText}}</h2>
    <p class="text-center">{{descriptionText}}</p>
    <p class="text-center">{{skillsText}}</p>
    <Skills v-for="item in skills"
            :key="item.index"
            :title="item.title"
            :description="item.description"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Skills from '../components/Skills.vue';

export default {
  name: 'Home',
  components: {
    Skills,
  },
  data() {
    return {
      titleText: 'Адександр',
      subtitleText: 'Начинающий фронтенд разработчик',
      descriptionText: 'Заканчиваю курс по фронтенд разработке от Ozon New Skills',
      skillsText: 'Получил следующие навыки:',
    };
  },
  computed: {
    ...mapGetters([
      'skills',
    ]),
  },
};
</script>

<style>
.home {
  background-color: #A67E6F;
  background-size: cover;
  height: 100%;
  color: white;
}
</style>
