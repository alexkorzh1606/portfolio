import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: [
      {
        title: 'Верстка',
        description: 'Владею HTML5 и CSS3, умею верстать на флексах и гридах, имею опыт работы с библиотекой Bulma.',
        img: 'https://www.xhtmljunction.com/blog/wp-content/uploads/2018/02/html5-css3.png',
      },
      {
        title: 'JavaScript',
        description: 'Умею разрабатывать веб-приложения на нативном JavaScript с использованием WebPack, TypeScript, fetch и других технологий.',
        img: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
      },
      {
        title: 'Vue.js',
        description: 'Имею опыт разработки на фреймворке VUE с использованием библиотек Vuetify, Vuex, Vue router.',
        img: 'https://miro.medium.com/max/400/1*zyNSb0UXhP8TfxYbj-GNWg.png',
      },
    ],
    projects: [
      {
        title: 'Лэндинг',
        description: 'Простой сверстанный лэндинг',
        link: 'https://alexkorzh1606.github.io/thousandsunny/',
        gitLink: 'https://github.com/alexkorzh1606/thousand_sunny.git',
        img: 'https://s175sas.storage.yandex.net/rdisk/c64cf6f55e6216b332aa18f7299acf82d2ac93b0d1a232f0141dc24f4d6727d2/5fe10863/0Y7q4feFUG8QzPpdGhkyElY07CtCTDClxkDlIxslZXKcMMJ66GpBPsJSD74j_zklrCbPbU2e7G4IjgJ1w0ihXg==?uid=918088686&filename=landing.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=918088686&fsize=1150651&hid=a26ae3f96612adb7d3a49b5dd969705b&media_type=image&tknv=v2&etag=5f389c36e694e5418a861f783dcc10ee&rtoken=mTqrEA1tKys5&force_default=yes&ycrid=na-5ecf91ee1347bcb51b6c45169226283b-downloader21e&ts=5b6ff7a389ec0&s=b1a619d9d80186b5ae1594a9a21269323984ec63aa00df52482bb9cfef0b3647&pb=U2FsdGVkX1_kRJuthkzDYgD4NsIsSgWsIxUYrc1YNyaQYWACYCQpZycIHf9FZkbXKtOiIjnnNotXNtS7g3vmnv8AoC7OVI1lYpbwTbgMadg',
      },
      {
        title: 'Нативная ToDo',
        description: 'ToDo приложение, построенное на JavaScript с использованием TypeScript. Сборка на WebPack. В данной версии сохраняет задачи в Local Storage.',
        link: '',
        gitLink: 'https://github.com/alexkorzh1606/todo.git',
        img: 'https://s80vla.storage.yandex.net/rdisk/3d58b008fdd764911ffd486524c76f90855b054308aa4686d646498fc4bb972e/5fe10b05/0Y7q4feFUG8QzPpdGhkyEvjdy2kkFpjidXlF5b7v58Dv1d8Gwidk-BqXT1yn94mDdx0AOTg7SCWdjnwC73cAvg==?uid=918088686&filename=todo.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=918088686&fsize=32628&hid=5b476a933d9079c06996af8198871473&media_type=image&tknv=v2&etag=64927b75ef8bd5cf231c514ba044e13d&rtoken=F5p78mOBFDoO&force_default=yes&ycrid=na-b4f492b3572e8135cbb9a91825fc1dba-downloader21f&ts=5b6ffa2650b40&s=7142def860497c01919b843671834d7e133029560126a210ba640f95f108838e&pb=U2FsdGVkX1_gXXXbl4VGNKmr1n5uaE45botMJCIFZwcN_tYjfVxAkoV11XvTgbflxj0oyJ7S5s3SLqX_pkBECnTL8SirwWN6czHIa7ZWx74',
      },
      {
        title: 'Это портфолио',
        description: 'Этот сайт разработан на JavaScript фреймворке VUE с использованием библиотеки Vuetify, роутинга VueRouter и хранилища Vuex',
        link: '',
        gitLink: 'https://github.com/alexkorzh1606/portfolio.git',
        img: 'https://s74vla.storage.yandex.net/rdisk/5a4f2939284d085d8ea3b2656aa7dcd36457c3752adc8afa2e098deb2fca0622/5fe10c3e/0Y7q4feFUG8QzPpdGhkyEt8NJ0Wm7KE5iS04asA-aqTrQ6G1iiPnP7B64MFg1XrWHWQRBFgDcwWmQUQwYM2E4g==?uid=918088686&filename=portfolio.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=918088686&fsize=1275907&hid=1205809e12e13ad65a79367427b81035&media_type=image&tknv=v2&etag=cb282986a9dcfa9f7d38b3d086b77e39&rtoken=kObjnSbfD8MI&force_default=yes&ycrid=na-2fad7a51ee1047c5e361e83fa900828e-downloader10f&ts=5b6ffb50d0b80&s=6f79e39dd8394e447587b5474a73a8ac5d4487372d90741b19affaae347bf019&pb=U2FsdGVkX1_517b316EU8d5JpzIRdbN6ZBjWh-N4OISf_TEyixbSPFaBpDY8UwQ8v26aGerqnjOpe0cvJP0WaAUBtqwpTyP4svQngqOK_nI',
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
