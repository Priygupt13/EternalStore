import axios from 'axios';
import authHeader from './auth-header';
import { API_URL } from '../common/const';

class UserService {
  constructor(){
    this.public_content_url = API_URL + "/all";
    // Supported Method: REST.GET
    this.user_board_url = API_URL + "/file/list";
    // Supported Method: REST.GET
    this.admin_dashboard_url = API_URL + "/file/admin/list";
    // Supported Method: REST.POST
    this.file_create_url = API_URL + "/file/create";
    // Supported Method: REST.POST
    this.file_update_url = API_URL + "/file/update/";
    // Supported Method: REST.DELETE
    this.file_delete_url = API_URL + "/file/";
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

  deleteFile(fileId) {
    return axios.delete(this.file_delete_url + fileId, { headers: authHeader() })
  }
}

export default new UserService();