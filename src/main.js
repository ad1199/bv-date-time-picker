import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";

Vue.use(Vuetify);
Vue.config.productionTip = false;

const vuetify = new Vuetify({});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
