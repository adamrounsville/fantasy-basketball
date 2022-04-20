import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";
import AllPlayers from "../views/PlayersView.vue";
import MyTeam from "../views/MyTeamView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/AllPlayers",
    name: "AllPlayers",
    component: AllPlayers
  },
  {
    path: "/MyTeam",
    name: "MyTeam",
    component: MyTeam
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;