import React from 'react';
import '../css/CrearSolicitud.css';
import {UsuarioRep} from './UsuarioRep.js';
import { Alert } from 'reactstrap';


export class CrearSolicitud extends React.Component{

    constructor(props) {
      super(props);
      this.UsuarioRep = new UsuarioRep();
      this.state = {
          rut_paciente:"",
          a:false
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      }

  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value
      });
  }

  handleSubmit(event) {
      console.log(this.state.rut_paciente)
      if(this.state.rut_paciente!==""){
        const solicitud = 
        { rut_paciente: this.state.rut_paciente};
        this.UsuarioRep.crearSol(solicitud).then(data => {
        window.location.href = "/menuMed";
        })
    
      }
      else{
        this.setState({a:true});
      }
      event.preventDefault();
  }
  
    render(){
      return(
            <div className="container py-4  ">
          <React.Fragment>                 
          <Alert color="danger" isOpen={this.state.a} > Datos no validos, ingrese nuevamente.  </Alert>                  
          </React.Fragment>
          <form id="formLogin" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div>
                <p id ="txt">Nombre Paciente</p>
                <input type="text" className="form-control"  name="nombre" id="wusername" ></input>     
                </div>

                <div className="py-3 ">                  
                <p id ="txt">Rut </p>
                <input type="text" className="form-control" name="rut_paciente" id="wpass" value={this.state.rut_paciente} onChange={this.handleInputChange}/>
                </div>
                <div className="py-3"></div>     
                <button  className="btn btn-secondary"  name="submit">Enviar</button>

            </form>


          </div>
          );  
    }
}

export default CrearSolicitud;