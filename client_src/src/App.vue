<template>
  <v-app>
    <v-app-bar class="main-toolbar" app color="primary" dark flat>
      <div class="d-flex align-center mr-3">
        <v-img
          alt="NBA Stats Logo"
          class="mr-3"
          contain
          :src="require('./assets/nbastats.png')"
          transition="scale-transition"
          width="40"
        />
        <h2><router-link to="/">NBA Stats</router-link></h2>
      </div>

      <v-btn text>
        <router-link to="/allPlayers">All Players</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/playerComparison">Player Comparison</router-link>
      </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
