<template>
	<div class="container">
    <h4 class="empty-team" v-if="myTeam.length === 0">It looks like your team is empty. Go to the <router-link to="/players">All Players</router-link> page to select players.</h4>
    <h2 v-else>Your NCAA Fantasy Basketball Team</h2>
    <TeamDisplay v-bind:myTeam="myTeam"/>
  </div>
</template>

<script>
import TeamDisplay from "../components/TeamDisplay.vue"
export default {
  name: "MyTeamView",
  components: {
    TeamDisplay,
  },
  computed: {
    myTeam() {
      return this.$root.$data.myTeam;
    },
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.empty-team {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>