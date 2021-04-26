import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../assets/images/header_logo.png";

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

class Header extends React.PureComponent {
  getActivePath() {
    const { pathname } = this.props.location;
    return pathname;
  }

  render() {
    const active = this.getActivePath();
    return (
      <header>
        <img src={logo} alt="Kasa" className="header-logo" />
        <div className="links-container">
          {links.map((link) => {
            return (
              <Link
                to={link.url}
                key={link.url}
                className={
                  "link-item" + (active === link.url ? " active-link" : "")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
