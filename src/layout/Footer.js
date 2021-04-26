import React from "react";
import logo from "../assets/images/footer_logo.png";

class Footer extends React.PureComponent {
  render() {
    return (
      <footer>
        <img src={logo} alt="Kasa" className="footer-logo" />
        <p className="copyright-text">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
