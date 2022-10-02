import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';

class UserService {
  constructor(){
    this.public_content_url = API_URL + "all";
    this.user_board_url = API_URL + "user";
    this.admin_dashboard_url = API_URL + "admin";
  }

  getPublicContent() {
    return axios.get(this.public_content_url);
  }

  getUserBoard() {
    return axios.get(this.user_board_url, { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(this.admin_dashboard_url, { headers: authHeader() });
  }
}

export default new UserService();