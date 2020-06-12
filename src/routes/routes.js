import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Authority from "../components/Auth/Authority";
import Dashboard from "../components/Dashboard/Dashboard";
import UserPage from "../components/User/UserPage";
import TicketRaise from "../components/User/TicketRaise";
import Admin from "../components/Admin/Admin";
import Success from "../components/Success";

const NotFound = () => {
  return (
    <div className="text-center">
      <h3>Error:404...Page Not Found</h3>
    </div>
  );
};

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/user" render={() => <UserPage />} />
        <Route
          exact
          path="/ticket-raise"
          render={props => <TicketRaise {...props} />}
        />
        <Route
          exact
          path="/authorityLogin"
          render={props => <Authority {...props} />}
        />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/admin" render={props => <Admin {...props} />} />
        <Route exact path="/success" render={props => <Success {...props} />} />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </div>
  );
}
