import React from "react";

class WrapComponent extends React.Component {
  render() {
    return <main id="content">{this.props.children}</main>;
  }
}

export default WrapComponent;
