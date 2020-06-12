import React, { Component } from "react";
import Navbar from "../Navbar";
import firebase from "../../firebase/firebase";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
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
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => console.log(res))
      .then(res => {
        return firebase
          .database()
          .ref("users/")
          .push({
            username: this.state.name,
            email: this.state.email,
            password: this.state.password
          });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="bg-light">
        <Navbar />
        <div className="container p-3 border shadow-sm w-25 mt-5">
          <form onSubmit={this.handleSubmit}>
            <div>
              <h4>User Registration:</h4>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChange}
                id="name"
                aria-describedby="nameHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email:</label>
              <input
                type="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChange}
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Mobile:</label>
              <input
                type="text"
                maxLength="10"
                className="form-control"
                pattern="\d*"
                value={this.state.mobile}
                onChange={this.handleChange}
                id="mobile"
                aria-describedby="mobileHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={this.handleChange}
                id="password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 border">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}
