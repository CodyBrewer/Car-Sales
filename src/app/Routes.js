import React from "react";
import { Route } from "react-router-dom";
import Cars from "../components/cars/Cars";
import Selected from "../components/Selected/Selected";
import Navigation from "../components/Navigation/Navigation";

const Routes = props => {
  return (
    <div>
      <Navigation />
      <Route path="/" exact component={Cars} />
      <Route path="/selected" component={Selected} />
    </div>
  );
};

export default Routes;
