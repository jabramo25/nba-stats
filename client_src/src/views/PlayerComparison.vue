<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <div>
            Use this tool to compare two players on a variety of difference
            stats over their careers.
            <div>
              <v-combobox
                v-model="player1Select"
                class="compare-select"
                :items="playersNames"
                label="Player 1"
              ></v-combobox>
              <v-combobox
                v-model="player2Select"
                class="compare-select"
                :items="playersNames"
                label="Player 2"
              ></v-combobox>
              <v-combobox
                v-model="statSelect"
                class="compare-select"
                :items="stats"
                label="Stat"
              ></v-combobox>
            </div>
            <comparison-chart></comparison-chart>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import ComparisonChart from '../components/ComparisonChart.vue';
import AdvancedPlayerDataService from "../services/AdvancedPlayerDataService";
import ComparisonChart from "../components/ComparisonChart";
import _ from "lodash";

export default {
  name: "playerComparison",
  data() {
    return {
      players: null,
      stats: [],
      player1Select: null,
      player2Select: null,
      statSelect: null,
      playersNames: [],
    };
  },
  methods: {
    fetchPlayerData() {
      AdvancedPlayerDataService.getAll({})
        .then((response) => {
          this.players = response.data;
          this.playersNames = _.uniq(_.map(this.players, "Player"));
        })
        .catch((e) => {
          console.log(e);
        });
    },
    select() {},
  },
  beforeMount() {},
  mounted() {
    this.player1Select = "LeBron James";
    this.player2Select = "Michael Jordan";
    this.statSelect = "VORP";
    this.stats = ["VORP", "WS", "FGpct", "PER", "TSpct", "ThreePpct"];
    this.fetchPlayerData();
  },
  components: {
    ComparisonChart,
  },
};
</script>
