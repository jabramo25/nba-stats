import http from "../http-common";

class PlayerDataService {
  getAll() {
    return http.get("/players");
  }

  get(id) {
    return http.get(`/players/${id}`);
  }

  findByTitle(title) {
    return http.get(`/players?name=${title}`);
  }
}

export default new PlayerDataService();