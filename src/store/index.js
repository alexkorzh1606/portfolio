import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: [
      {
        title: 'Верстка',
        description: 'Владею HTML5 и CSS3, умею верстать на флексах и гридах, имею опыт работы с библиотекой Bulma.',
      },
      {
        title: 'JavaScript',
        description: 'Умею разрабатывать веб-приложения на нативном JavaScript с использованием WebPack, TypeScript, fetch и других технологий.',
      },
      {
        title: 'Vue.js',
        description: 'Имею опыт разработки на фреймворке VUE с использованием библиотек Vuetify, Vuex, Vue router.',
      },
    ],
    projects: [
      {
        title: 'Лэндинг',
        description: 'Простой сверстанный лэндинг',
        link: '',
        gitLink: 'https://github.com/alexkorzh1606/thousand_sunny.git',
      },
      {
        title: 'Нативная ToDo',
        description: 'ToDo приложение, построенное на JavaScript с использованием TypeScript. Сборка на WebPack. В данной версии сохраняет задачи в Local Storage.',
        link: '',
        gitLink: 'https://github.com/alexkorzh1606/todo.git',
      },
      {
        title: 'Кликер',
        description: 'Простой кликер на VUE, построенный с использованием компонентов. Имеет задания для игрока.',
        link: '',
        gitLink: 'https://github.com/alexkorzh1606/coockieclicker.git',
      },
      {
        title: 'Это портфолио',
        description: 'Этот сайт разработан на JavaScript фреймворке VUE с использованием библиотеки Vuetify, роутинга VueRouter и хранилища Vuex',
        link: '',
        gitLink: 'https://github.com/alexkorzh1606/portfolio.git',
      },
    ],
  },
  getters: {
    skills: (state) => state.skills,
    projects: (state) => state.projects,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
