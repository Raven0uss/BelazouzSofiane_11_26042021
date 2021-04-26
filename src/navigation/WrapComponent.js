import React from "react";

class WrapComponent extends React.Component {
  render() {
    return <div id="content">{this.props.children}</div>;
  }
}

export default WrapComponent;
