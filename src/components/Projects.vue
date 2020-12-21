<template>
  <v-hover v-slot="{ hover }" style="margin: 30px 0;">
    <v-card
      class="mx-auto"
      max-width="600"
    >
      <v-img

      >
        <h3 style="padding: 15px;">{{title}}</h3>
      <p style="padding: 15px;">{{description}}</p>
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out blue darken-2
            v-card--reveal display-3 white--text"
            v-bind:style="{backgroundImage: `url(${img})`}"
          >
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <v-btn v-bind:href="gitLink" text target="blank">
          <span class="text-center">GitHub репозиторий</span>
        </v-btn>
        <v-btn v-bind:href="link" text target="blank" v-bind:disabled="disabledStatus">
          <span class="text-center">Демонстрация</span>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Projects',
  props: {
    title: String,
    description: String,
    link: String,
    img: String,
    gitLink: String,
    disabledStatus: String,
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
.v-card--reveal {
  align-items: center;
  opacity: 1;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover
}
</style>
