import axios from "axios";
import { BASE_URL } from "../constants/urls";

class SharingServices {
  addSharing(data) {
    return axios.post(`${BASE_URL}/api/v1/sharing`, data);
  }

  getAllSharing() {
    return axios.get(`${BASE_URL}/api/v1/sharing`);
  }

  getSharing(id) {
    return axios.get(`${BASE_URL}/api/v1/sharing/${id}`);
  }
}

export default SharingServices;
