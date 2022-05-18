import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Detail from "../pages/Detail/Detail";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route
          path="/react-movie/:category/search/:keyword"
          component={Catalog}
        />
        <Route path="/react-movie/:category/:id" component={Detail} />
        <Route path="/react-movie/:category" component={Catalog} />
        <Route path="/react-movie/" exact component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
