import React from "react";

class Tag extends React.PureComponent {
  render() {
    return <div className="housing-tag">{this.props.tag}</div>;
  }
}

export default Tag;
