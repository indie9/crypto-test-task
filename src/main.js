/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import vClickOutside from "v-click-outside";

Vue.config.productionTip = false;
Vue.use(vClickOutside);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
