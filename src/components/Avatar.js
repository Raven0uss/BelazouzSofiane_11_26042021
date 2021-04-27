import React from "react";

class Avatar extends React.PureComponent {
  render() {
    const { name, picture } = this.props;
    const firstname = name.split(" ")[0];
    const lastname = name.split(" ")[1];

    return (
      <div className="host-informations">
        <div className="host-identity">
          <p>{firstname}</p>
          <p>{lastname}</p>
        </div>
        <img alt={name} className="host-picture" src={picture} />
      </div>
    );
  }
}

export default Avatar;
