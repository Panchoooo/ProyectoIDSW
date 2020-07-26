import React from 'react';
import '../css/VerSolicitudes.css';
import {UsuarioRep} from './UsuarioRep.js';
import { Table, } from 'reactstrap';

export class VerTodasSolicitudes extends React.Component{

    constructor(props){
        
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.UsuarioRep = new UsuarioRep();
        this.state = {
            data: [],
            id_s: 0,
            filtro: "All"
        }
    }

    componentDidMount() {

        {this.UsuarioRep.verAllPab().then(data => {console.log(data)
            this.setState({data: data.data});})}
    }

    handleClick(e) {
        localStorage.setItem('solicitud', e);
        window.location.href = "/detalles";
      }


    render(){
        const { isLoading, data, error } = this.state;
    return(           
        
        <React.Fragment  >
        
            <Table dark  className="container" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Pabellon</th>
                    <th>Tipo</th>
                    <th>Estado</th>
                </tr>
            </thead>            
            <tbody >
                <React.Fragment >
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                    data.map(a => {
                        const {id, pabellon, estado,tipo } = a;
                        var color="black";
                        if(estado==="Disponible"){
                            color="text-success";
                        }
                        return (
                                           
                            <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{pabellon}aa</td>
                            <td>{tipo}</td>
                            <td  className={color}>{estado}</td>
                     
                            </tr>)
                          
                    
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