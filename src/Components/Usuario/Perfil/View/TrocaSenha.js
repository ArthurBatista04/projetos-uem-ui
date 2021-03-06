import React, { Component, Fragment } from "react";
import Header from "../../../Header/Header";
import { TextInput } from "react-materialize";
import { Redirect, Link } from "react-router-dom";

import { handleChange, handlePassChange } from "../controller/CtrlTrocaSenha";

class TrocaSenha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      redirect: false
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <Header />

        <div className="container">
          <div className="card-panel">
            <div className="row">
              <form onSubmit={e => handlePassChange(this, e)}>
                <h5 className="indigo-text center">Alterar senha</h5>

                <div>
                  <TextInput
                    s={12}
                    password
                    validate
                    label="Senha atual"
                    name="currentPassword"
                    error="Insira a senha atual"
                    success=""
                    required
                    onChange={e => {
                      handleChange(this, e);
                    }}
                  />
                  <TextInput
                    s={12}
                    password
                    validate
                    label="Senha nova"
                    name="newPassword"
                    error="Insira a nova senha"
                    success=""
                    required
                    onChange={e => {
                      handleChange(this, e);
                    }}
                  />
                  <TextInput
                    s={12}
                    password
                    validate
                    label="Confirme nova senha"
                    name="confirmNewPassword"
                    error="Confirme a nova senha"
                    success=""
                    required
                    onChange={e => {
                      handleChange(this, e);
                    }}
                  />
                </div>

                <button
                  type="submit"
                  name="btn_senha"
                  className="btn blue waves-effect waves-light lighten-1 right"
                >
                  Alterar senha
                </button>
                <Link
                  to="/perfil"
                  className="btn waves-effect waves-light blue lighten-1 left"
                >
                  Voltar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TrocaSenha;
