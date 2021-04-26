import React from "react";
import { Link, withRouter } from "react-router-dom";

const links = [
  {
    label: "Accueil",
    url: "/",
  },
  {
    label: "A Propos",
    url: "/about",
  },
];

class Header extends React.Component {
  getActivePath() {
    const { pathname } = this.props.location;
    return pathname;
  }

  render() {
    const active = this.getActivePath();
    console.log(active);
    return (
      <header>
        {links.map((link) => {
          return (
            <Link to={link.url} key={link.url}>
              {link.label}
            </Link>
          );
        })}
      </header>
    );
  }
}

export default withRouter(Header);
