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
            :defaultColDef="defaultColDef"
            :rowData="players"
          >
          </ag-grid-vue>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdvancedPlayerDataService from "../services/AdvancedPlayerDataService";
import _ from "lodash";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "allPlayers",
  data() {
    return {
      columnDefs: null,
      defaultColDef: null,
      gridOptions: null,
      players: [],
      filters: [
        {
          name: "All Players (1978-2017)",
          filter: [],
          isActive: true,
        },
        {
          name: "Started more than 30 games",
          filter: [{ field: "GS", value: "30", operator: "gt" }],
        },
        {
          name: "3pt% greater than 35%",
          importantColumns: ["ThreePpct"],
          filter: [{ field: "ThreePpct", value: ".35", operator: "gt" }],
        },
      ],
    };
  },
  methods: {
    fetchPlayerData(filter = {}) {
      AdvancedPlayerDataService.getAll({ filters: filter })
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
      //problem with getting columnDefs to update. can clear, but it always goes back to default.
      //this.setImportantColumns(data.importantColumns);
      this.fetchPlayerData(data.filter);
    },
    setAllListItemInactive() {
      this.filters.forEach((filter) => {
        filter.isActive = false;
      });
    },
    setImportantColumns(columns) {
      let self = this;
      _.each(columns, (column) => {
        let columnIndex = _.findIndex(self.columnDefs, { field: column });
        //move column to just after team so its easier to see.
        self.columnDefs.splice(2, 0, self.columnDefs.splice(columnIndex, 1)[0]);
      });
    },
  },
  beforeMount() {
    this.defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true,
      width: 100,
    };
    let percentFormatter = (params) => {
      return (params.value * 100).toFixed(1) + "%";
    };
    let ppgGetter = (params) => {
      return (params.data.PTS / params.data.G).toFixed(1);
    };
    this.columnDefs = [
      { headerName: "Name", field: "Player", width: 200 },
      { headerName: "Year", field: "Year" },
      { headerName: "Team", field: "Tm" },
      { headerName: "PPG", valueGetter: ppgGetter },
      { headerName: "G", field: "G" },
      { headerName: "GS", field: "GS" },
      {
        headerName: "3pt%",
        field: "ThreePpct",
        valueFormatter: percentFormatter,
      },
      {
        headerName: "2pt%",
        field: "TwoPpct",
        valueFormatter: percentFormatter,
      },
      {
        headerName: "FG%",
        field: "eFGpct",
        valueFormatter: percentFormatter,
      },
      { headerName: "VORP", field: "VORP" },
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
