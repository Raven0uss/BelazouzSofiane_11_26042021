import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.PureComponent {
  render() {
    return (
      <div id="not-found-container">
        <p className="text-error-code">404</p>
        <p className="text-error-message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="back-home-link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    );
  }
}

export default NotFound;
