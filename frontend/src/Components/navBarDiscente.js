import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBarDiscente extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Projetos UEM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Entrar
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Projetos/search">
                Buscar projeto
              </Link>
          </li>
        </ul>



        </div>
      </nav>
    );
  }
}

export default NavBarDiscente;