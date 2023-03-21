import Vue from "vue";
import Button from './button.vue';
import Icon from './icon.vue';

Vue.component('u-button',Button)
Vue.component('u-icon',Icon)

new Vue({
  el:'#app',
})
