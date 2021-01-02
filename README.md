# nba-stats

#NBA Stats is a project to display NBA player data, including advanced stats, from 1978-2017.  You can view the data in a grid format (built using ag-grid), with some pre-selected
filters, along with some in grid filters. There is also a player comparison tool where you can compare a particular stat for 2 players and see how that stat changed over their career.

## Tech Used ##
Vue app with MySQL/Express/Sequelize backend. Vuetify for component library, ag-grid for grid, highcharts for charts. 


## Features to be added: ##
* Dropdown filters
  * Above all players grid view, for more powerful filters
  * Completes what is not available out of the box with ag-grid
* Ability to add more than 2 players to compare tool
  * Maximum of 5 players
* Add page for searching on specific games 
  * New db table needed
  * Grid view similar to all players page
* Pagination
  * Currently is loading all from database, should limit abd fetch on scroll
  * Add server search
