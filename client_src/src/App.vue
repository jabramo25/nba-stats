<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <!-- <ag-grid-vue style="width: 500px; height: 500px;"
                 class="ag-theme-alpine"
                 :columnDefs="columnDefs"
                 :rowData="rowData">
    </ag-grid-vue> -->
  </div>
</template>

<script>
    //import {AgGridVue} from "ag-grid-vue";

    export default {
        name: 'App',
        data() {
            return {
                columnDefs: null,
                rowData: null
            }
        },
        components: {
            //AgGridVue
        },
        beforeMount() {
            this.columnDefs = [
                {headerName: 'Make', field: 'make'},
                {headerName: 'Model', field: 'model'},
                {headerName: 'Price', field: 'price'}
            ];

            this.rowData = [
                {make: 'Toyota', model: 'Celica', price: 35000},
                {make: 'Ford', model: 'Mondeo', price: 32000},
                {make: 'Porsche', model: 'Boxter', price: 72000}
            ];
        }
    }
</script>

<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
