import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { compareFileUpdateTime } from "../common/userFileUtils";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      files: []
    };
  }

  componentDidMount() {
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
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <div>
            <form enctype="multipart/form-data" method="post">
              <label className="btn btn-primary">Upload A File <input type="file" hidden/></label>
            </form>
          </div>
          <div>
            <table className="table table-bordered table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col"  style={{ width: '20%' }}>Document Name</th>
                  <th scope="col" style={{ width: '15%' }}>Last Modified</th>
                  <th scope="col"></th>
                </tr>
              </thead>
            <tbody>
            {this.state.files && this.state.files.map(
              (file, index) => 
                <tr>
                 <td>{file.name}</td>
                 <td>{file.updateTimestamp}</td>
                 <td></td>
                </tr>)}
            </tbody>
          </table>
          </div>
        </header>
      </div>
    );
  }
}