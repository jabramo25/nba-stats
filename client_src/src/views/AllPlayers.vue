<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item
              v-for="filter in filters"
              :key="filter.name"
              v-bind:class="{ 'list-item-active': filter.isActive }"
              v-on:click="filterClicked(filter)"
              link
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ filter.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item link color="grey lighten-4">
              <v-list-item-content>
                <v-list-item-title> Refresh </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <ag-grid-vue
            style="width: 100%; height: 700px"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :rowData="players"
          >
          </ag-grid-vue>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import PlayerDataService from "../services/PlayerDataService";
import AdvancedPlayerDataService from "../services/AdvancedPlayerDataService";

import { AgGridVue } from "ag-grid-vue";

export default {
  name: "allPlayers",
  data() {
    return {
      columnDefs: null,
      players: [],
      filters: [
        {
          name: "All Players (1978-2017)",
          filter: {},
          isActive: true,
        },
        {
          name: "Filter 2",
          filter: { GS: ">30" },
        },
        {
          name: "Filter 3",
          filter: { ThreePpct: ">0.30" },
        },
      ],
    };
  },
  methods: {
    fetchPlayerData() {
      AdvancedPlayerDataService.getAll()
        .then((response) => {
          this.players = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    filterClicked(data) {
      this.setAllListItemInactive();
      data.isActive = true;
    },
    setAllListItemInactive() {
      this.filters.forEach((filter) => {
        filter.isActive = false;
      });
    },
  },

  beforeMount() {
    this.columnDefs = [
      { headerName: "Name", field: "Player", sortable: true, filter: true },
      { headerName: "Year", field: "Year" },
      { headerName: "Position", field: "Pos" },
      { headerName: "Age", field: "Age" },
      { headerName: "Team", field: "Tm" },
      { headerName: "Games Played", field: "G" },
      { headerName: "Games Started", field: "GS" },
    ];
  },
  mounted() {
    this.fetchPlayerData();
  },
  components: {
    AgGridVue,
  },
};
</script>
