<template>
  <div class="coockie">
    <h1>Кликните по изображению печеньки {{target}} раз(а)</h1>
    <img v-bind:src="coockie_element.img" v-on:click="clickCounter" alt="">
    <h2 >Вы кликнули {{counter}} раз(а)</h2>
    <h2 v-show="show" class="text-center">Добро пожаловать на мой сайт-портфолио.
      Вы можете пройти в другие разделы или продолжить кликать по печеньке.</h2>
    <div class="navigation" v-show="show">
       <v-btn x-large color="#4298D3" to='/about' text>
          <span class="text-center">ОБО МНЕ</span>
        </v-btn>
        <v-btn x-large color="#4298D3" to='/portfolio' text>
          <span class="text-center">ПРОЕКТЫ</span>
        </v-btn>
        <v-btn x-large color="#4298D3" to='/contacts' text>
          <span class="text-center">КОНТАКТЫ</span>
        </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Coockie',
  data() {
    return {
      coockie_element: {
        img: 'https://image.flaticon.com/icons/png/512/614/614131.png', // переписать на ссылку в ассетс
      },
      counter: 0,
      target: 3,
    };
  },
  methods: {
    clickCounter() {
      if (this.counter === this.target - 1) {
        this.target *= 4;
      }
      this.counter += 1;
      return this.counter;
    },
  },
  computed: {
    show() {
      if (this.counter >= 3) {
        return true;
      } return false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coockie {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 300px;
}
img {
  width: 200px;
}
h1, h2 {
  font-family: sans-serif;
}
.coockie {
 width: 66%;
 margin: auto;
}
</style>
