import http from "../http-common";

class AdvancedPlayerDataService {
  getAll(queryOptions) {
    return http.put("/advancedPlayers", queryOptions);
  }

  get(id) {
    return http.get(`/advancedPlayers/${id}`);
  }

  findByTitle(title) {
    return http.get(`/advancedPlayers?name=${title}`);
  }
}

export default new AdvancedPlayerDataService();