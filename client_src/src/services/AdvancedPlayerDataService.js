import http from "../http-common";

class AdvancedPlayerDataService {
  getAll(filter) {
    return http.put("/advancedPlayers", filter);
  }

  get(id) {
    return http.get(`/advancedPlayers/${id}`);
  }

  findByTitle(title) {
    return http.get(`/advancedPlayers?name=${title}`);
  }
}

export default new AdvancedPlayerDataService();