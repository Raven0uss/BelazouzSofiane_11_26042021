import React from "react";

const defineCollapseType = (content) => {
  switch (typeof content) {
    case "string":
      return "text";
    case "object":
      return Array.isArray(content) ? "list" : undefined;
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

    this.innerClass =
      this.props.innerClass === undefined ? "" : `-${this.props.innerClass}`;
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
          <div className={"collapse-title-text" + this.innerClass}>
            {this.props.title}
          </div>
          <div
            className={`${"collapse-title-arrow" + this.innerClass} ${
              this.state.open ? "collapse-arrow-open" : ""
            }`}
          />
        </div>
        {this.state.open && (
          <div className="collapse-content-block">
            {/* Collapse with text */}
            {this.type === "text" && (
              <p className={"collapse-content-text" + this.innerClass}>
                {this.props.content}
              </p>
            )}
            {/* Collapse with list */}
            {this.type === "list" && (
              <ul className={"collapse-content-list" + this.innerClass}>
                {this.props.content.map((element, index) => (
                  <li key={`${element}-${index}`}>{element}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Collapse;
