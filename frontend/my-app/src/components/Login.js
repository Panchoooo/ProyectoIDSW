import React,{ Component } from 'react';
import './css/Login.css';
import {UsuarioRep} from './Componentes/UsuarioRep.js';

import { Alert } from 'reactstrap';

class Login extends Component{

  constructor(props) {
    super(props);
    this.UsuarioRep = new UsuarioRep();
    this.state = {
      password:"",
      nombre:"",
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
    const solicitud = 
    { username: this.state.nombre, password: this.state.password};
    this.UsuarioRep.Logear(solicitud).then(data => {
      if(data !== "error"){
      localStorage.setItem('jwt', data[0]);
      localStorage.setItem('rol', data[1]);
        if(data[1]==="ROLE_USER"){
          this.props.history.push('/MenuMed');
        }
        if(data[1]==="ROLE_GESTOR"){
          this.props.history.push('/MenuGes');
        }
        if(data[1]==="ROLE_ENFERMERE"){
          this.props.history.push('/MenuEnf');
        }
        if(data[1]==="ROLE_ADMIN"){
          this.props.history.push('/MenuAdm');
        }      
    }
      else{
        this.setState({a:true});
      }
    })
    event.preventDefault();
    
  }

    render(){
        return(  
            <div className="container py-5 ">


            <div id="titulo" className="login-container">
              <div className="text-center">
              <h1 className="display-5 py-5"> Ingrese a su cuenta </h1>

                <React.Fragment>                 
                  <Alert color="danger" isOpen={this.state.a} > Usuario o Contraseña no validos, intente nuevamente.  </Alert>                  
                </React.Fragment>
  
              </div>
                <form id="formLogin" className="form-horizontal"  onSubmit={this.handleSubmit}>
                    <div>
                    <input type="text" className="form-control" name="nombre" id="username" value={this.state.nombre} onChange={this.handleInputChange}/>
                    </div>
                    <div className="py-3">
                    <input type="text" className="form-control" name="password" id="password" value={this.state.password} onChange={this.handleInputChange}/>
                    </div>
                    <button  className="btn btn-outline-secondary"  name="submit">Ingresar</button>
                    
                </form>
              <div id="txt" className="buttom-primary py-3">
                <a href="RegistroMed" id="txt"  > ¿Medico Nuevo? Registrese Aqui</a>
                <div className="py-1"></div>
                <a href="RegistroGes" id="txt"  > ¿Gestor Nuevo? Registrese Aqui</a>
                <div className="py-1"></div>
                <a href="RegistroEnf" id="txt"  > ¿Enfermer Nuevo? Registrese Aqui</a>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;