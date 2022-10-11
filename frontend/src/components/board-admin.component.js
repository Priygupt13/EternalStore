import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { compareFileUpdateTime } from "../common/userFileUtils";
import AuthService from "../services/auth.service";
import { Navigate } from "react-router-dom";
import { FileListView } from "./files-list.component";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      content: "",
      files: []
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if(!currentUser){
      this.setState({redirect: "/home"});
      return;
    }

    UserService.getAdminBoard().then(
      response => {
        this.setState({
          // store file in order of their update time.
          files: response.data.sort(compareFileUpdateTime).reverse()
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }
    
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
          <div>
            <table className="table table-bordered table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col"  style={{ width: '20%' }}>Document Name</th>
                  <th scope="col" style={{ width: '15%' }}>Last Modified</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <FileListView files={this.state.files} />
          </table>
          </div>
      </div>
    );
  }
}