import http from "../http-common";

class AdvancedPlayerDataService {
  getAll() {
    return http.get("/advancedPlayers");
  }

  get(id) {
    return http.get(`/advancedPlayers/${id}`);
  }

  findByTitle(title) {
    return http.get(`/advancedPlayers?name=${title}`);
  }
}

export default new AdvancedPlayerDataService();