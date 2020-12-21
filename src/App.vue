<template>
  <v-app>
    <v-app-bar app color="#4298D3" dark>
      <div class="d-flex align-center">
        <router-link to='/' icon>
          <v-img alt="Cockies logo" class="shrink mr-2" contain src="https://rusample-m.ru/sites/default/files/imagecache/pic_normal/sites/default/files/pic/label/smw12.png" transition="scale-transition" width="40" />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-btn to='/about' text>
          <span class="text-center">ОБО МНЕ</span>
        </v-btn>
        <v-btn to='/portfolio' text>
          <span class="text-center">ПРОЕКТЫ</span>
        </v-btn>
        <v-btn to='/contacts' text>
          <span class="text-center">КОНТАКТЫ</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    showButton: true,
  }),
};
</script>
