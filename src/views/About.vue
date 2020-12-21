<template>
  <div class="about">
    <v-row>
      <v-col>
        <h1 class="text-center">{{titleText}}</h1>
        <h2 class="text-center">{{subtitleText}}</h2>
        <p class="text-center">{{descriptionText}}</p>
        <Skills v-for="item in skills"
                :key="item.index"
                :img="item.img"
                :title="item.title"
                :description="item.description"
        />
      </v-col>
      <v-col>
        <img class="my-photo" src="./../assets/myphoto.jpg" alt="">
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Skills from '../components/Skills.vue';

export default {
  name: 'About',
  components: {
    Skills,
  },
  data() {
    return {
      titleText: 'Александр',
      subtitleText: 'Начинающий фронтенд разработчик',
      descriptionText: 'Заканчиваю курс по фронтенд разработке от Ozon New Skills. Вот чему я научился:',
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
.about {
  height: 100%;
}
.my-photo {
  width: 700px;
}
</style>
