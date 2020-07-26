import React,{ Component } from 'react';
import './css/Registro.css';
import {UsuarioRep} from './Componentes/UsuarioRep.js';
import { Alert } from 'reactstrap';

class RegistroPab extends Component{

    constructor(props) {
        super(props);
        this.UsuarioRep = new UsuarioRep();
        this.state = {
            password:"",
            cpassword:"",
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
        { pabellon: this.state.nombre, tipo: this.state.password};
        this.UsuarioRep.RegistrarPab(solicitud).then(data => {console.log(data[0])
            if(data[0] !== undefined ){
                window.location.href = "/menuGes";              
            }
            else{
                this.setState({a:true});
            }      
        })
        event.preventDefault();
    }

    render(){

        
        return(  
            <div>

                <div id="titulo" className="container py-3">
                    <h1 className="display-4">Registro</h1>
                </div>

                <div className="container py-3">

                    <React.Fragment>                 
                    <Alert color="danger" isOpen={this.state.a} > Datos no validos, intente nuevamente.  </Alert>                  
                    </React.Fragment>

                    <form id="formLogin" className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div>
                        <p id ="txt"> Ingrese nombre</p>
                        <input type="text" className="form-control"  name="nombre" id="wusername" value={this.state.nombre} onChange={this.handleInputChange}></input>     
                        </div>
        
                        <div className="py-3 ">                  
                        <p id ="txt">Ingrese tipo </p>
                        <input type="text" className="form-control" name="password" id="wpass" value={this.state.password} onChange={this.handleInputChange}/>
                        </div>
               
                        <div className="py-3"></div>
        
                        <a id="btncnl" href="/login" className="btn btn-secondary">Cancelar</a>
                        <button  className="btn btn-secondary"  name="submit">Registrar</button>
        
                    </form>
        
                </div>
            </div>
        );
    }
}

export default RegistroPab;