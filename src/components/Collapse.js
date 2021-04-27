import React from "react";

const defineCollapseType = (content) => {
  switch (typeof content) {
    case "string":
      return "text";
    case "array":
      return "list";
    default:
      return undefined;
  }
};

class Collapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.type = defineCollapseType(this.props.content);
  }

  handleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    if (this.type === undefined) return null;
    return (
      <div className="collapse-container">
        <div className="collapse-title-block" onClick={this.handleOpen}>
          <div className="collapse-title-text">{this.props.title}</div>
          <div
            className={`collapse-title-arrow ${
              this.state.open ? "collapse-arrow-open" : ""
            }`}
          />
        </div>
        {this.state.open && (
          <div className="collapse-content-block">
            {/* Collapse with text */}
            {this.type === "text" && (
              <p className="collapse-content-text">{this.props.content}</p>
            )}
            {/* Collapse with list */}
            {this.type === "list" && <div>{this.props.content}</div>}
          </div>
        )}
      </div>
    );
  }
}

export default Collapse;
