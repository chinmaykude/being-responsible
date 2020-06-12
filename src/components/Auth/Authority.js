import React, { Component } from "react";
import Navbar from "../Navbar";
import fire from "../../firebase/firebase";

export default class Authority extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        if (res.user.uid) {
          this.props.history.push("/admin");
        } else {
          alert("Please enter valid credentials!!");
        }
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container w-25 mt-5">
          <form onSubmit={this.handleSubmit}>
            <div>
              <h4>Authority Login:</h4>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                Please enter your registered email.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button
              className="mr-0 btn btn-sm btn-danger"
              onClick={() => this.props.history.push("/admin")}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}
