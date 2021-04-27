import React from "react";
import locations from "../assets/json/data.json";
import Thumbnail from "../components/Thumbnail";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home-illustration">
          <div className="home-illustration-text">
            Chez vous, partout et ailleurs
          </div>
          <div className="home-illustration-mask" />
        </div>
        <div id="location-list-container">
          {locations.map((location) => {
            return <Thumbnail {...location} />;
          })}
        </div>
      </>
    );
  }
}

export default Home;
