import React from 'react';
import '../css/Detalles.css';
import {UsuarioRep} from './UsuarioRep.js';
import {   Card,  CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Date } from 'prismic-reactjs';


import Header from './Header.js'

export class DetallesSolicitud extends React.Component{

    constructor(props){
        
    super(props);
        this.UsuarioRep = new UsuarioRep();
            this.state = {
            data: [],
            show: false,
            show2: false,
            show3: false
        }
    }

    componentDidMount() {
        const solicitud = 
        { id: window.localStorage.getItem("solicitud") };
        this.UsuarioRep.verDetSol(solicitud).then(data => { 
            this.setState({data: data.data});         
            if(this.state.data.estado === "Esperando Paciente"){
         
               this.setState({show: true})
            }
            if(this.state.data.estado === "Listo"){
         
                this.setState({show: true,show2:true})
                }
            if(this.state.data.estado === "Dado de Alta"){
         
                this.setState({show: true,show2:true,show3:true})
                }
        })    
    }


    fecha(fecha){
        const timestamp = Date(fecha);
        var fechaf = Intl.DateTimeFormat('es-ES',{
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
        }).format(timestamp);
        return fechaf;
    }

    handleClick(e) {
        const solicitud = 
        {  
            id: window.localStorage.getItem("idsol")}
            this.UsuarioRep.FinSol(solicitud).then(data => {
            console.log(data)});
            window.location.href = "/menuEnf";
      }

      handleClick2(e) {
        const solicitud = 
        {  
            id: window.localStorage.getItem("idsol")}
            this.UsuarioRep.AltaSol(solicitud).then(data => {
            console.log(data)});
            window.location.href = "/menuMed";
      }
    render(){
        var ref = "";
        var boton = "";
        if(window.localStorage.getItem("rol")==="ROLE_USER"){
            ref= "/menuMed"; 
            if(this.state.data.estado === "Listo"){
                boton = <Button  onClick={() => {window.localStorage.setItem("idsol",this.state.data.id); this.handleClick2()}} className="m-4">Dar Alta</Button>;}
            
            
        };
        if(window.localStorage.getItem("rol")==="ROLE_GESTOR"){
            ref = "/menuGes";
            if(this.state.data.estado === "Pendiente"){
                boton = <Button href="/gestionar" onClick={() => window.localStorage.setItem("idsol",this.state.data.id)} className="m-4">Gestionar</Button>;} 
        };
        if(window.localStorage.getItem("rol")==="ROLE_ENFERMERE"){
            ref = "/menuEnf";
            if(this.state.show2 === false){
            boton = <Button  onClick={() => {window.localStorage.setItem("idsol",this.state.data.id); this.handleClick()}} className="m-4">Finalizar</Button>;}
        };
        if(window.localStorage.getItem("rol")==="ROLE_ADMIN"){
            ref = "/menuAdm";
        };

    return(            
    <div>
        <header>
          <Header/>
        </header>
        <section className="py-4" id="detalles">
            <React.Fragment >

                      
                                
                    <Card className="container py-5">
                        <CardBody>
                        <CardTitle><h4> ID: {this.state.data.id}</h4></CardTitle>
                        <CardSubtitle className="py-3"><h5> Estado: {this.state.data.estado}</h5> </CardSubtitle>
                        <CardText>  Rut Paciente: {this.state.data.rut_paciente} </CardText>
                        <CardText>  ID Medico: {this.state.data.medico} </CardText>
                        { this.state.show ? <CardText> ID Gestor: {this.state.data.gestor} </CardText>
                            
                        
                         : null }
                         { this.state.show ? <CardText> ID Enfermero: {this.state.data.enfermere} </CardText>: null }
                         { this.state.show ? <CardText> ID Pabellon: {this.state.data.id_Pab} </CardText> : null }
                        
                            
                        <CardText>  Fecha de Emision: {this.fecha(this.state.data.fecha_creacion)} </CardText>
                        { this.state.show ? <CardText> Fecha de Gestion: {this.fecha(this.state.data.fecha_gestion)} </CardText> : null }
                        { this.state.show2 ? <CardText> Fecha de Check: {this.fecha(this.state.data.fecha_check)} </CardText> : null }
                        { this.state.show3 ? <CardText> Fecha de Alta: {this.fecha(this.state.data.fecha_alta)} </CardText> : null }
                        <Button href={ref} className="m-4">Volver</Button>
                        {boton}
                        </CardBody>
                    </Card>
    
        
            </React.Fragment>
        </section>
    </div>
    )}    
}


export default DetallesSolicitud;