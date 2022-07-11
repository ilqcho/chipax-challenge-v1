<template>
  <div id="app">
    <char-finder :data="charFinderData" />
    <episode-locations :data="episodeLocationsData" />
  </div>
</template>

<script>
import CharFinder from './components/CharFinder.vue'
import EpisodeLocations from './components/EpisodeLocations.vue'

export default {
  name: 'App',
  components: {
    EpisodeLocations,
    CharFinder,
  },
  data(){
    return{
      charFinderData: {},
      episodeLocationsData: {},
    }
  },
  async created(){
    const response = await this.$http.get('http://localhost:3000/test');

    if(response){
      this.charFinderData = response.body.data[0];
      this.episodeLocationsData = response.body.data[1];
    }
  },
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url('http://www.rockandpop.cl/wp-content/uploads/2017/06/Rick-y-Morty.jpg');
}
</style>
