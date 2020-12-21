<template>
  <div class="home">
    <Coockie />
  </div>
</template>

<script>
import Coockie from '../components/Coockie.vue';

export default {
  name: 'Home',
  components: {
    Coockie,
  },
};
</script>

<style>
.home {
  height: 100%;
}
</style>
