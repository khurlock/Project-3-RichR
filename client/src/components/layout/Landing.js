import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">RichR</h1>
                <p className="lead">
                  {" "}
                  At the end of this year, will you be richer?
                  <br />
                  Find out now...
                </p>
                <hr />
                <Link
                  className="get-richr btn btn-lg btn-info mr-2"
                  to="/register"
                >
                  Get RichR
                  {/* </a>
                {/* <a href="login.html" className="btn btn-lg btn-light">
                  Login */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
