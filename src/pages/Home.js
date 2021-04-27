import React from "react";
import housingList from "../assets/json/data.json";
import Thumbnail from "../components/Thumbnail";

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <div className="home-illustration">
          <div className="home-illustration-text">
            Chez vous, partout et ailleurs
          </div>
          <div className="home-illustration-mask" />
        </div>
        <div id="housing-list-container">
          {housingList.map((housing) => {
            return <Thumbnail {...housing} key={housing.id} />;
          })}
        </div>
      </>
    );
  }
}

export default Home;
