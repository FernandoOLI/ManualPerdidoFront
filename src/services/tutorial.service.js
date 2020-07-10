import http from "../http-common";

class TutorialDataService {
  pythonCodeBack() {
    return http.get(`/tutorials/python`);
  }
}

export default new TutorialDataService();