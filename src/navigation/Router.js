import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WrapComponent from "./WrapComponent";

import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";

import NotFound from "./NotFound";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

const routes = [
  {
    id: "about",
    path: "/about",
    exact: true,
    component: (props) => <About {...props} />,
  },
  {
    id: "logement",
    path: "/logement/:id",
    exact: true,
    component: (props) => <Logement {...props} id={props.match.params.id} />,
  },
  {
    id: "home",
    path: "/",
    exact: true,
    component: (props) => <Home {...props} />,
  },
  {
    id: "404",
    path: "*",
    exact: false,
    component: () => <NotFound />,
  },
];

class Router extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <WrapComponent>
          <Switch>
            {routes.map((route) => {
              return (
                <Route
                  key={route.id}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </WrapComponent>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
