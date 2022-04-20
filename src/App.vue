<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand"><img src="/images/ncaa_logo.png" width="55" height="70"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link"><router-link to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/allPlayers">All Players</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/myTeam">My Team</router-link></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view/>
    <footer class="bg-dark text-center text-lg-start fixed-bottom">
      <div class="text-center p-3 text-light">
        Adam Rounsville & Dallin Henderson |
        <a href="https://github.com/adamrounsville/CS-260-Creative-Project-3"> GitHub Repository</a>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  text-align: center;
}

#nav {
  padding-bottom: 1%;
}

#nav a {
  color: white;
}

footer {
  background: black;
  margin-top: 5%;
}
</style>