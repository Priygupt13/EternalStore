import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { compareFileUpdateTime } from "../common/userFileUtils";
import AuthService from "../services/auth.service";
import { Navigate } from "react-router-dom";
import { FileListView } from "./files-list.component";


export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      content: "",
      files: [],
      user: null
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if(!currentUser){
      this.setState({redirect: "/home"});
      return;
    }
    this.setState({
      user: currentUser
    });

    UserService.getUserBoard().then(
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
        <header className="jumbotron content_border">
          <div>
            <h2 className="inline_text">Hello There!</h2>
            <h3>{this.state.content}</h3>
          </div>
        </header>
        <div>
          <div className="content_border my_drive_header">
            My Drive
            <form enctype="multipart/form-data" method="post" class="upload_file_form">
              <label className="btn btn-primary">Upload A File <input type="file" hidden/></label>
            </form>
          </div>
          <FileListView files={this.state.files} />
        </div>
      </div>
    );
  }
}