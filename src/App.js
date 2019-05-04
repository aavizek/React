import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import First from "./First";
import Fir from "./Fir";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Fir} />;
          <Route path="/details" component={First} />
        </Switch>
      </div>
    );
  }
}

export default App;
