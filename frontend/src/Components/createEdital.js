import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class createEdital extends Component {

	state = {
        "NomeProjeto": "",
        "dataInicio": "",
        "dataTermino": "",
        "prerequisitos":"",
        "descricao": ""
    }
    handleChange = (e) =>  {
        this.setState({[e.target.name] : e.target.value});
      }


    onSubmit = (e) => {
        e.preventDefault()
        this.props.handleCreateEdital(this.state)
    }

    render() {
        return (
          <div className="container">
                <h1 style={{textAlign: 'center'}}>Cadastrar novo edital de Processo seletivo</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Nome do projeto</span>
                            </div>
                            <input name='nome' value="Técnicas de algoritmos aproximados" disabled="true" type="text" className="form-control" placeholder="Nome do projeto" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>                    
                        
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Data de início do Processo Seletivo</span>
                            </div>
                            <input name='dataInicio' value={this.state.dataInicio} onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="ex: dd/mm/aaaa"/>
    
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Data de término do Processo Seletivo</span>
                            </div>
                            <input name='dataTermino' value={this.state.dataTermino} onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="ex: dd/mm/aaaa"/>
    
                        </div>
    
                        
    
                        <div className="input-group" style={{paddingBottom:"20px"   }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text">Pré-requisitos</span>
                            </div>
                            <textarea name='prerequisitos' value={this.state.prerequisitos} onChange={(e) => this.handleChange(e)} className="form-control" aria-label="With textarea"></textarea>
                        </div>

                        <div className="input-group" style={{paddingBottom:"20px"   }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text">Descrição</span>
                            </div>
                            <textarea name='descricao' value={this.state.descricao} onChange={(e) => this.handleChange(e)} className="form-control" aria-label="With textarea"></textarea>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="customSwitches"/>
                            <label class="custom-control-label" for="customSwitches">Status do edital</label>
                        </div>
                    

                    </div>
                    <button type="submit" value='Submit' className="btn btn-dark" style={{float: 'right'}}> Cadastrar </button>
                </form>
                <NavLink type="submit" className="btn btn-danger" to="/Docente/Projetos" >Cancelar</NavLink>
          </div>
        )
      }
}

export default createEdital