<template>
  <div class="home">
    <v-sheet min-height="70vh" rounded="lg" class="pa-4">
      <h1 class="text-center">Search, Filter, Compare</h1>
      <div>
        <h4 class="pa-4 text-center mb-6">
          NBA stats is an app you can use to search for any player from
          1978-2017 to see their stats and advanced stats. Use the comparison
          tool to compare any players as their seasons progressed over their
          career.
        </h4>
      </div>
      <v-row>
        <v-col cols="6">
          <h3 class="text-center pb-3">Grid Tool</h3>
          <router-link to="/allPlayers">
            <v-img
              alt="Grid View"
              contain
              :src="require('../assets/gridDisplay.png')"
              transition="scale-transition"
              width="450"
            />
          </router-link>
        </v-col>
        <v-col cols="6">
          <h3 class="text-center pb-3">Compare Tool</h3>
          <router-link to="/playerComparison">
            <v-img
              alt="Grid View"
              contain
              :src="require('../assets/chartDisplay.png')"
              transition="scale-transition"
              width="450"
            />
          </router-link>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
