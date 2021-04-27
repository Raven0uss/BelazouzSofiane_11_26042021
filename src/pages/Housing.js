import React from "react";
import { Redirect } from "react-router-dom";
import housingList from "../assets/json/data.json";
import Avatar from "../components/Avatar";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Tag from "../components/Tag";

const getThisHousing = (id) => housingList.find((housing) => housing.id === id);

class Housing extends React.PureComponent {
  constructor(props) {
    super(props);

    this.housing = getThisHousing(this.props.id);
  }

  render() {
    if (this.housing === undefined) return <Redirect to="/404" />; // /404 is not defined in route, so it will be catch by wildcard
    return (
      <>
        <Carousel images={this.housing.pictures} />
        <div className="housing-metadata-block">
          <div className="housing-head-block">
            <div className="housing-title-block">
              <h3 className="housing-title">{this.housing.title}</h3>
              <h4 className="housing-location">{this.housing.location}</h4>
            </div>
            <Avatar {...this.housing.host} />
          </div>
          <div className="housing-middle-block">
            <div className="housing-tag-list-container">
              {this.housing.tags.map((tag) => (
                <Tag tag={tag} key={tag} />
              ))}
            </div>
            <Rating rating={this.housing.rating} />
          </div>
        </div>

        <div className="housing-informations-block">
          <Collapse title="Description" content={this.housing.description} />
          <Collapse title="Équipements" content={this.housing.equipments} />
        </div>
      </>
    );
  }
}

export default Housing;
