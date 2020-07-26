import React from 'react';
import '../css/VerSolicitudes.css';
import {UsuarioRep} from './UsuarioRep.js';
import { Table, } from 'reactstrap';
import { Date } from 'prismic-reactjs';


export class VerTodasSolicitudes extends React.Component{

    constructor(props){
        
        super(props);
        this.fecha = this.fecha.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.UsuarioRep = new UsuarioRep();
        this.state = {
            data: [],
            id_s: 0
        }
    }

    componentDidMount() {
            const solicitud = 
    {  
        estado: "Pendiente"}
        this.UsuarioRep.verSolbyEst(solicitud).then(data => {
            this.setState({data: data.data});})
    }

    handleClick(e) {
        localStorage.setItem('solicitud', e);
        window.location.href = "/detalles";
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

    render(){
        const { isLoading, data, error } = this.state;
    return(           
        
        <React.Fragment  >
        
            <Table dark  className="container" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Rut Paciente</th>
                    <th>Estado</th>
                    <th>Fecha de emision</th>
                    <th>Mas Info</th>
                </tr>
            </thead>            
            <tbody >
                <React.Fragment >
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                    data.map(a => {
                        const {id, rut_paciente, estado,fecha_creacion } = a;
                        var fecha = this.fecha(fecha_creacion);                        
                        return (
                            <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{rut_paciente}</td>
                            <td className="text-danger" >{estado}</td>
                            <td>{fecha}</td>
                            <td> <button className="btn btn-dark btn-sm text-primary"   name="submit"  onClick={() => this.handleClick(id)}> Ver Detalles</button></td>
                            </tr>
                        );
                    })
                    ) : (
                    <h3>Loading...</h3>
                    )}                
                </React.Fragment>
            </tbody>
        </Table>
      </React.Fragment>
    )}    
}


export default VerTodasSolicitudes;