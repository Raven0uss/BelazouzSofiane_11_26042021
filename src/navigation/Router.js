import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";

import NotFound from "./NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/about"
            component={(props) => <About {...props} />}
          />
          <Route
            exact
            path="/logement/:id"
            component={(props) => (
              <Logement {...props} id={props.match.params.id} />
            )}
          />
          <Route exact path="/" component={(props) => <Home {...props} />} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
