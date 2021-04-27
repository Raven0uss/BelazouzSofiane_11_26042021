import React from "react";
import { Redirect } from "react-router-dom";
import locations from "../assets/json/data.json";

const getThisLocation = (id) =>
  locations.find((location) => location.id === id);

class Logement extends React.Component {
  constructor(props) {
    super(props);

    this.location = getThisLocation(this.props.id);
  }

  render() {
    if (this.location === undefined) return <Redirect to="/404" />; // /404 is not defined in route, so it will be catch by wildcard
    return <>Logement {this.location.title}</>;
  }
}

export default Logement;
