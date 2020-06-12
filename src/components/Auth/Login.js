import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import firebase from "../../firebase/firebase";
import UserPage from "../User/UserPage";
import Navbar from "../Navbar";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state)
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      // .catch(err => console.log(err))
      // .catch(function(error) {
      //     // Handle Errors here.
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //     // ...
      //   })
      // .then(res => console.log(res))

      .then(res => {
        if (res.user.uid) {
          this.setState({
            isLoggedIn: true
          });
        } else if (res.user.email === "admin@gmail.com") {
          this.props.history.push("/admin");
        } else {
          alert("PLease enter valid credentials!!");
        }
      })
      .then(localStorage.setItem("email", this.state.email));
    // // .catch(err=>console.log(err))
  };

  render() {
    return (
      <div className="bg-light col-12 text-center">
        <Navbar />
        {!this.state.isLoggedIn ? (
          <>
            <br />
            <h4 className="col-12 col-md-6 m-auto my-4q">Each man is questioned by life; and he can only answer to life by answering for his own life; <br /> to life he can only respond by <span style={{ color: "#17a2b8" }}>being responsible.</span></h4>
            <p className="mt-4" style={{ fontSize: "1.5rem" }}>Please login to continue.</p>
            <div className="container col-12 col-md-6 border p-3 shadow-sm w-25 mt-2">
              <form onSubmit={this.handleSubmit}>
                <div className="d-flex justify-content-between">
                  <h4>Login Page:</h4>
                  <button
                    className="btn btn-sm btn-info"
                    onClick={() => this.props.history.push("/authorityLogin")}
                  >
                    Authority
                </button>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
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
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="form-control"
                    id="password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 border">
                  Sign In
              </button>
              </form>
              <div>
                New User? <Link to="/register">Register Here</Link>
              </div>
            </div>
          </>
        ) : (
            <Redirect to="/user" />
          )
          // <div>
          //      <UserPage />
          //  </div>
        }
      </div>
    );
  }
}
