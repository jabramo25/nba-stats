<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <div class="pa-6">
            Use this tool to compare two players on a variety of difference
            stats over their careers.
            <div>
              <v-combobox
                v-model="player1Select"
                class="compare-select d-inline-block"
                :items="playersNames"
                label="Player 1"
              ></v-combobox>
              <v-combobox
                v-model="player2Select"
                class="compare-select d-inline-block"
                :items="playersNames"
                label="Player 2"
              ></v-combobox>
              <v-combobox
                v-model="statSelect"
                class="compare-select d-inline-block"
                :items="stats"
                label="Stat"
              ></v-combobox>
              <v-btn
                v-on:click="comparePlayers"
                class="d-block"
                color="primary"
              >
                Compare
              </v-btn>
            </div>
          </div>
          <div>
            <highcharts
              class="hc"
              v-bind:options="chartData"
              ref="chart"
            ></highcharts>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdvancedPlayerDataService from "../services/AdvancedPlayerDataService";
import _ from "lodash";
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";

exportingInit(Highcharts);
export default {
  name: "playerComparison",
  data() {
    return {
      stats: [],
      player1Select: null,
      player2Select: null,
      statSelect: null,
      playersNames: [],
      comparisonData: [],
      chartData: {
        title: {
          text: "NBA Player Comparison",
        },
        yAxis: {
          title: {
            text: "",
          },
        },
        xAxis: {
          title: {
            text: "Season #",
          },
        },
        series: [],
      },
    };
  },
  methods: {
    fetchPlayerData() {
      return AdvancedPlayerDataService.getAll({ attributes: ["Player"] })
        .then((response) => {
          this.playersNames = _.uniq(_.map(response.data, "Player"));
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fetchSinglePlayerData(playerName) {
      let queryObject = {
        filters: [{ field: "Player", value: playerName, operator: "eq" }],
        attributes: [this.statSelect, "Year", "Tm"],
        orderBy: [["Year", "ASC"]],
      };
      return AdvancedPlayerDataService.getAll(queryObject)
        .then((response) => {
          this.comparisonData.push({
            name: playerName,
            data: _.map(response.data, (yearData, i) => {
              return {
                name: `Year: ${yearData.Year} Team: ${yearData.Tm}`,
                x: i + 1,
                y: yearData[this.statSelect],
              };
            }),
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    comparePlayers() {
      this.comparisonData = [];
      let fetchPlayer1Data = this.fetchSinglePlayerData(this.player1Select);
      let fetchPlayer2Data = this.fetchSinglePlayerData(this.player2Select);
      Promise.all([fetchPlayer1Data, fetchPlayer2Data]).then(() => {
        this.chartData.series = this.comparisonData;
        this.chartData.yAxis.title.text = this.statSelect;
      });
    },
  },
  beforeMount() {},
  mounted() {
    this.player1Select = "LeBron James";
    this.player2Select = "Michael Jordan*";
    this.statSelect = "VORP";
    this.stats = ["VORP", "WS", "FGpct", "PER", "TSpct", "ThreePpct"];
    this.fetchPlayerData().then(() => {
      this.comparePlayers();
    });
  },
  components: {},
};
</script>
