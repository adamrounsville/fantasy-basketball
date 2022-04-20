<template>
  <div class="container p-5 text-center">
    <h1>Welcome to NCAA Basketball Online!</h1>
    <br>
    <p class="main-text">
      Do you love college basketball and fantasy sports? If so, this website is for you! 
      Here, you can build your dream team, with players from colleges across the country! 
      Go to the <router-link to="/players">All Players</router-link> page to get started.
    </p>
    <p>P.S If you are a fan of March Madness, go ahead and check it out <a href="https://www.espn.com/mens-college-basketball/">here</a>!</p>
  </div>  
</template>

<style scoped>
.main-text {
  font-size: 120%;
  margin-bottom: 15%;
}
</style>