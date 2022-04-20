<template>
  <div class="container">
    <h2>Choose Any Five Players to Add to Your Team</h2>
    <h4>Number of Players on Your Team: {{myTeam.length}}</h4>
    <PlayerDisplay v-bind:allPlayers="allPlayers"/>
  </div>
</template>

<script>
import PlayerDisplay from "../components/PlayerDisplay.vue"
export default {
  name: "PlayersView",
  components: {
    PlayerDisplay
  },
  computed: {
    myTeam() {
      return this.$root.$data.myTeam;
    },
    allPlayers() {
      return this.$root.$data.allPlayers;
    }
  }
};
</script>