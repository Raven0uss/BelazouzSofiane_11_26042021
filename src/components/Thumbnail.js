import React from "react";
import { Link } from "react-router-dom";

class Thumbnail extends React.PureComponent {
  render() {
    return (
      <Link
        to={`/housing/${this.props.id}`}
        className="thumbnail-housing-element"
        style={{
          backgroundImage: `url(${this.props.cover})`,
        }}
      >
        <div className="thumbnail-housing-mask">
          <p className="thumbnail-housing-title">{this.props.title}</p>
        </div>
      </Link>
    );
  }
}

export default Thumbnail;
