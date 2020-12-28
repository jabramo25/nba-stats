<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item v-for="filter in filters" :key="filter.name" link>
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
import PlayerDataService from "../services/PlayerDataService";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "allPlayers",
  data() {
    return {
      columnDefs: null,
      players: [],
      filters: [
        {
          name: "Filter 1",
          data: {},
        },
        {
          name: "Filter 2",
          data: {},
        },
        {
          name: "Filter 3",
          data: {},
        },
      ],
    };
  },
  methods: {
    fetchPlayerData() {
      PlayerDataService.getAll()
        .then((response) => {
          this.players = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  beforeMount() {
    this.columnDefs = [
      { headerName: "Name", field: "name", sortable: true, filter: true },
      { headerName: "Year Start", field: "year_start" },
      { headerName: "Year End", field: "year_end" },
      { headerName: "Position", field: "position" },
      { headerName: "Height", field: "height" },
      { headerName: "Weight", field: "weight" },
      { headerName: "Birth Date", field: "birth_date" },
      { headerName: "College", field: "college" },
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
