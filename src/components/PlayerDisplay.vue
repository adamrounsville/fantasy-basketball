<template>
  <div class="container">
    <div class="row">
      <div class="player col" v-for="player in allPlayers" v-bind:key="player.first_name">
        <div class="card mb-3 mx-auto bg-white text-dark">
          <button v-on:click="addPlayer(player)" class="btn btn-secondary"><a>Add Player</a></button>
          <img class="card-img-top" v-bind:src="player.img_URL">
          <div class="card-body">
            <h5 class="card-title">{{player.first_name + " " + player.last_name}}</h5>
            <div class="row text-left">
              <div class="col">
                <p class="card-text">Pos: {{player.position}}</p>
                <p class="card-text">Pts: {{player.points}}</p>
                <p class="card-text">Asts: {{player.assists}}</p>
                <p class="card-text">Rebs: {{player.rebounds}}</p>
              </div>
              <div class="col">
                <p class="card-text">Height: {{player.height}}"</p>
                <p class="card-text">Weight: {{player.weight}}</p>
                <p class="card-text">FG%: {{player.FG_percent}}</p>
                <p class="card-text">FT%: {{player.FT_percent}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerDisplay",
  props: {
    allPlayers: Array,
  },
  methods: {
    addPlayer(player) {
      if (this.$root.$data.myTeam.length < 5) {
        if (!(this.$root.$data.myTeam.includes(player))) {
          this.$root.$data.myTeam.push(player);
        } else {
          return;
        }
      } else {
        alert('Your team is full. You can only have 5 players at a time. Go to the "My Team" page to remove players.');
      }
    }
  }
};
</script>

<style scoped>
.card {
  width: 200px;
  height: 345px;
  border: 3px solid black;
}

.card-img-top {
  max-height: 138px;
}

.card-body .row .col {
  font-size: 13px;
  line-height: 8px;
  padding: 0 0 1em 1em;
}

.btn {
  margin: 5px;
}

.container {
  margin-top: 25px;
  margin-bottom: 70px;
}
</style>