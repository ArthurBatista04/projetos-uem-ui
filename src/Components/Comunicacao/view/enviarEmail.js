import React, { Component, Fragment } from "react";
import Header from "../../Header/Header";
import { Redirect } from "react-router-dom";
import { TextInput, Textarea } from "react-materialize";
import {
  handleChange,
  enviar,
  assuntoEmail,
  handleClick
} from "../controller/CtrlEnviarEmail";
import Axios from "axios";
import PathName from "../../pathConst";

class Email extends Component {
  state = {
    remetente: "",
    para: "",
    texto: "",
    assunto: "",
    cco: [],
    redirect: false
  };

  async componentWillMount() {
    const idProjeto = this.props.match.params.id;
    const userId = localStorage.getItem("user_id");

    try {
      const filter = {
        include: [
          {
            relation: "docente",
            scope: {
              include: {
                relation: "usuario"
              }
            }
          },
          {
            relation: "coorientador",
            scope: {
              include: {
                relation: "usuario"
              }
            }
          }
        ]
      };

      const resProjeto = await Axios.get(
        `${PathName}/api/Projetos/${idProjeto}?filter=${JSON.stringify(filter)}`
      );
      const resUser = await Axios.get(`${PathName}/api/Usuarios/${userId}`);

      const projeto = resProjeto.data;
      const user = resUser.data;

      this.setState({
        assunto: assuntoEmail(projeto, user),
        para: projeto.docente.usuario ? projeto.docente.usuario.email : "NULL",
        cco: this.props.cco ? this.props.cco : "Sem cópia",
        remetente: user.email
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>;
    }

    return (
      <Fragment>
        <Header />
        <div className="section" />
        <center>
          <div className="container">
            <div
              className="z-depth-1 grey lighten-4 row"
              style={{
                display: "inlineBlock",
                padding: 32 + "px" + 48 + "px" + 0 + "px" + 48 + "px",
                border: 1 + "px solid  #EEE"
              }}
            >
              <form className="col s12" onSubmit={e => enviar(this, e)}>
                <div className="container">
                  <h4>Envio de Email</h4>
                  <div className="row">
                    <div>
                      <TextInput
                        s={6}
                        label="Para"
                        type="text"
                        name="para"
                        value={this.state.para}
                        disabled
                      ></TextInput>

                      <TextInput
                        s={6}
                        label="Cópia"
                        type="text"
                        name="cco"
                        value={this.state.cco}
                        disabled
                      ></TextInput>
                    </div>

                    <TextInput
                      s={12}
                      label="Assunto"
                      type="text"
                      name="assunto"
                      value={this.state.assunto}
                      disabled
                    ></TextInput>

                    <Textarea
                      s={12}
                      m={12}
                      l={12}
                      xl={12}
                      label="Mensagem"
                      type="textarea"
                      name="texto"
                      value={this.state.texto}
                      onChange={e => handleChange(this, e)}
                    ></Textarea>
                  </div>
                </div>
                <br />
                <div>
                  <div className="row" style={{ display: "flex" }}>
                    <button
                      type="button"
                      name="btn_voltar"
                      className="col s4 btn btn-large waves-effect black"
                      style={{ float: "none", marginLeft: "auto" }}
                      onClick={e => handleClick(this, e)}
                    >
                      Voltar
                    </button>

                    <button
                      type="submit"
                      name="btn_signup"
                      className="col s4 btn btn-large waves-effect black"
                      style={{ float: "none", marginRight: "auto" }}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </center>
        <div className="section" />
      </Fragment>
    );
  }
}

export default Email;
