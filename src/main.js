import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import allPlayers from "./mock_data";

Vue.config.productionTip = false;

let data = {
	allPlayers: allPlayers,
	myTeam: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");