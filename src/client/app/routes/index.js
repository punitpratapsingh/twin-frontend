import React from "react";
// import { Route } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import InitStore from "../redux/store";
import loadable from "@loadable/component";

const HomePage = loadable(() => import("./HomePage"));
//const TablePage = loadable(() => import("./TablePage"));

export default () => {
  return (
    <Provider store={InitStore()}>
      <Router>
        <Route path='/' component={HomePage} exact/>
   {/* //     <Route path='/table' component={TablePage} exact/> */}
        <Route path='/home' component={HomePage} exact/>
      </Router>
    </Provider>
  );
};
