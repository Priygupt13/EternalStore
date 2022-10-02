import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

// It handles user authentication.
// Once authenticated, the user information is saved in local storage is "field:user"
class AuthService {
  constructor(){
        this.sign_in_url = API_URL + "signin";
        this.sign_up_url = API_URL + "signup";
        this.local_storage_key = "user";
  }

  login(username, password) {
    return axios
      .post(this.sign_in_url, {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem(this.local_storage_key, JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem(this.local_storage_key);
  }

  register(username, email, password) {
    return axios.post(this.sign_up_url, {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(this.local_storage_key));;
  }
}

export default new AuthService();