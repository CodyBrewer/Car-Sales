import React from "react";
import { Route } from "react-router-dom";
import Cars from "../components/cars/Cars";
import Selected from "../components/Selected/Selected";

const Routes = props => {
  return (
    <div>
      <Route path="/" exact component={Cars} />
      <Route path="/selected" component={Selected} />
    </div>
  );
};

export default Routes;
