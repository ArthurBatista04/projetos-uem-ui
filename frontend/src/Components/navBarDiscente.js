import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBarDiscente extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/Projetos/search">
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
              <Link className="nav-link" to="/Projetos/search">
                Buscar projeto
              </Link>
          </li>

          <li className="nav-item">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Confirgurações
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/Discente/Profile">
                  Perfil
                </Link>
                <Link className="dropdown-item" to="#">
                  Sair
                </Link>
              </div>
            </div>

          </li>x
        </ul>



        </div>
      </nav>
    );
  }
}

export default NavBarDiscente;
