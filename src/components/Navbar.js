import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-light shadow-sm"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Link to="/" className="navbar-brand mx-auto font-weight-bold">
        Being Responsible!
      </Link>
      {/* <button className='mr-0 btn btn-sm btn-danger mx-1' onClick={() => props.history.push('/user') }>User Page</button> */}
    </nav>
  );
}
