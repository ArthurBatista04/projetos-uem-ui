import React, { Component } from 'react'

export class mostrarProjeto extends Component {
  render() {
    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.projeto.titulo}</h5>
              <p className="card-text">{this.props.projeto.resumo}</p>
              <p className="card-text">{this.props.projeto.id}</p>
              <div className='btn-toolbar mr-2' >
                <div style={{paddingLeft:"20px"   }}>
                  <button type="button" className="btn btn-info" onClick={this.props.handleClickVisualize.bind(this, this.props.projeto.id)}> Visualizar </button> 
                </div>
                <div style={{paddingLeft:"20px"   }}>
                  <button type="button" className="btn btn-info" onClick={this.props.handlePS.bind(this, this.props.projeto.id)}> Gerenciar Processo Seletivo </button>   
                </div>
                <div style={{paddingLeft:"20px"   }}>
                  <button type="button" className="btn btn-danger btn-md" onClick={this.props.handleClickDelete.bind(this, this.props.projeto.id)}> Excluir </button>
                </div>
               
                
              </div>
            </div>
        </div>
    )
  }
}


export default mostrarProjeto
