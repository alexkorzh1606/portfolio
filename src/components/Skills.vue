<template>
<v-row>
    <v-col align="center">
        <v-card tile color="rgba(255, 255, 255, 0.0)" class="card">
            <h3 class="white--text">{{title}}</h3>
            <p class="white--text">{{description}}</p>
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
  width: 30%;
}
</style>
