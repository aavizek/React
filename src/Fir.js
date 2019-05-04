import React, { Component } from "react";
import { Link } from "react-router-dom";

class Fir extends Component {
  render() {
    return (
      <div class="container" style={{ marginTop: "80px" }}>
        <div class="jumbotron">
          <h1 class="display-4">Welcome to React form</h1>
          <p class="lead">
            This is a simple React form, which will display the values given by
            you in the form.
          </p>
          <hr class="my-4" />
          <p>Click on next button for React Form.</p>
          <p class="lead">
            <Link to="/details">
              <a class="btn btn-primary btn-lg" href="#" role="button">
                Next
              </a>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Fir;
