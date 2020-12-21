<template>
<v-row>
    <v-col align="center">
        <v-card class="card" min-width="70%">
          <v-row>
            <v-col>
              <div class="icon"
              v-bind:style="{backgroundImage: `url(${img})`}"></div>
            </v-col>
            <v-col>
              <h3 class="text-left">{{title}}</h3>
              <p class="text-left">{{description}}</p>
            </v-col>
          </v-row>
        </v-card>
    </v-col>
</v-row>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Skills',
  props: {
    title: String,
    description: String,
    img: String,
  },
  computed: {
    ...mapGetters([
      'skills',
    ]),
  },
};
</script>

<style>
.card {
  padding: 10px;
}
.icon{
  width: 290px;
  height: 100px;
  background-size: contain;
  background-position: center center;
}
</style>
