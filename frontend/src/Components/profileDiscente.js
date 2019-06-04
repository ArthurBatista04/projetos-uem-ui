import React, { Component, Fragment } from "react";

export class profile extends Component {
  render() {
    return (
      <Fragment>
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <div className="container">
          <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">
                {" "}
                <h4>Perfil do aluno</h4>
              </div>
              <div className="panel-body">
                <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                  <img
                    alt="User Pic"
                    src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                    id="profile-image1"
                    className="img-circle img-responsive"
                  />
                </div>
                <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                  <div className="container">
                    <h2>Adam Yoder</h2>
                    <span>
                      um <b> Aluno</b>
                    </span>
                  </div>
                  <hr />
                  <ul className="container details">
                    <li>
                      <span>
                        <span
                          className="glyphicon glyphicon-user one"
                          style={{ width: 50 + "px" }}
                        />
                        adamyoder
                      </span>
                    </li>
                    <li>
                      <span>
                        <span
                          className="glyphicon glyphicon-envelope one"
                          style={{ width: 50 + "px" }}
                        />
                        adamyoder@email.com
                      </span>
                    </li>
                    <li>
                      <span>
                        <span
                          className="glyphicon glyphicon-education"
                          style={{ width: 50 + "px" }}
                        />
                        Ciência da Computação
                      </span>
                    </li>
                  </ul>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default profile;