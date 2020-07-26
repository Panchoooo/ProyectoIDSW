import React from 'react';
import '../css/Detalles.css';
import {UsuarioRep} from './UsuarioRep.js';
import {   Card, CardBody,
    CardTitle, CardSubtitle, Button , Form, FormGroup, Label, Input} from 'reactstrap';
import { Date } from 'prismic-reactjs';
import Header from './Header.js'

export class GestionarSolicitud extends React.Component{

    constructor(props){
        
        super(props);
        
        this.UsuarioRep = new UsuarioRep();
            this.state = {
            data: [],data2:[],e:0,a:''}
    }


    componentDidMount() {
        this.UsuarioRep.verEnfs().then(data => {console.log(data.data)
            this.setState({data: data.data});})
        this.UsuarioRep.verAllPab().then(data => {console.log(data.data)
            this.setState({data2: data.data});})
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
            enfermere: window.localStorage.getItem("idenf"),id: window.localStorage.getItem("idsol"),id_Pab:window.localStorage.getItem("idpab")}
        this.UsuarioRep.GesSol(solicitud).then(data => {
            console.log(data)});
        localStorage.setItem('solicitud', e);
        window.location.href = "/menuGes";
      }


    render(){
        var ref = "";
        if(window.localStorage.getItem("rol")==="ROLE_USER"){
            ref= "/menuMed"; 
            
        };
        if(window.localStorage.getItem("rol")==="ROLE_GESTOR"){
            ref = "/menuGes";            
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
                    <CardTitle><h4> Gestion de Solicitud</h4></CardTitle>
                    <CardSubtitle className="py-3"><h5> Seleccione sala y enfermero</h5></CardSubtitle>        
        
                    <Form>
                        <FormGroup>
                            <Label for="exampleSelectMulti">Seleccione Enfermero a cargo</Label>
                        </FormGroup>
                    </Form>
            <React.Fragment  >
    
       
            <React.Fragment >
            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                {this.state.data.map(a => {
                    const {id, nombre } = a;                     
                    return (
                        <option key={id} onClick={() => window.localStorage.setItem("idenf",id)}>{nombre}</option>         
                    );
            })  }          
            </Input>           
            </React.Fragment>

            <div className="py-2"></div>

            <Form>
                        <FormGroup>
                            <Label for="exampleSelectMulti">Seleccione sala de recuperación</Label>
                        </FormGroup>
                    </Form>
            <React.Fragment >
            <Input type="select" name="selectMulti" id="exampleSelectMulti"  multiple>
                {this.state.data2.map(b => {
                    const {id, pabellon,estado } = b;     
                    if(estado==="Disponible"){                
                    return (
                        <option key={id} onClick={() => window.localStorage.setItem("idpab",id)}>{pabellon}</option>         
                    );}
            })  }          
            </Input>           
            </React.Fragment>
  </React.Fragment>



                        <Button href={ref} className="m-4">Cancelar</Button>
                        <Button onClick={() => this.handleClick()} className="m-4">Enviar</Button>;
                        </CardBody>
                    </Card>
    
        
            </React.Fragment>
        </section>
    </div>
    )}    
}


export default GestionarSolicitud;