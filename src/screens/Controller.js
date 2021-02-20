import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/Home";

//Creating controller class for easy routing the pages
class Controller extends Component {
  constructor() {
    super();
    this.baseUrl = "http://localhost:8080/api/"; //setting the baseUrl of the api
  }

  render() {
    return (
      <Router>
        <div className="main-conatiner">
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} baseUrl={this.baseUrl} />}
          />{" "}
          {/* Route to home Page */}
        </div>
      </Router>
    );
  }
}

export default Controller;
