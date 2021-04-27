import React from "react";
import { Link } from "react-router-dom";

class Thumbnail extends React.PureComponent {
  render() {
    return (
      <Link
        to={`/logement/${this.props.id}`}
        className="thumbnail-location-element"
        style={{
          backgroundImage: `url(${this.props.cover})`,
        }}
      >
        <div className="thumbnail-location-mask">
          <p className="thumbnail-location-title">{this.props.title}</p>
        </div>
      </Link>
    );
  }
}

export default Thumbnail;
