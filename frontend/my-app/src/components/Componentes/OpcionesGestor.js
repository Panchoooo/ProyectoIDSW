import React, { useState, Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import {UsuarioRep} from './UsuarioRep.js';
import { Table } from 'reactstrap';
import { Date } from 'prismic-reactjs';
import VerTodasSolicitudesP from './VerTodasSolicitudesP.js';
import VerTodasSolicitudesEP from './VerTodasSolicitudesEP.js';
import VerTodasSolicitudesL from './VerTodasSolicitudesL.js';
import VerTodasSolicitudesAlta from './VerTodasSolicitudesAlta.js';
import VerSolicitudes from './VerSolicitudes.js'; // va donde esta registro pab
//import RegistroPab from '../RegistroPab.js';


class OpcionesMedico extends Component{

    constructor(props){
        
        super(props);
        
        this.UsuarioRep = new UsuarioRep();
            this.state = {
            data:[],e:0,a:''}
    }


    componentDidMount() {
        this.UsuarioRep.verAllPab().then(data => {console.log(data.data)
            this.setState({data: data.data});})
    }


    render(){
        const Example = (props) => {
            const [activeTab, setActiveTab] = useState('1');

            const toggle = tab => {
                if(activeTab !== tab) setActiveTab(tab);
            }

            return (
                <div id="formulario">
                
                <Nav tabs >
                    <NavItem >
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); window.localStorage.setItem("est","Pendiente")}}
                    >
                        Solicitudes Pendientes Disponibles
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); window.localStorage.setItem("est","Esperando Paciente")}}
                    >
                        Ver Solicitudes en Espera
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3');window.localStorage.setItem("est","Pendientes3"); }}
                    >
                        Ver Solicitudes Check Listo
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4');window.localStorage.setItem("est","Pendientes3"); }}
                    >
                        Solicitudes Finalizadas
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '5' })}
                        onClick={() => { toggle('5');window.localStorage.setItem("est","Pendientes3"); }}
                    >
                        Historial Gestiones
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '6' })}
                        onClick={() => { toggle('6'); }}
                    >
                        Ver Salas disponibles
                    </NavLink>
                    </NavItem>
                </Nav>


                <TabContent activeTab={activeTab} className="py-5">
                    <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                        <VerTodasSolicitudesP/>
                        </Col>
                    </Row>
                    </TabPane>
                    <TabPane tabId="2">
                    <Row>
                        <VerTodasSolicitudesEP/>            
                    </Row>
                    </TabPane>
                    <TabPane tabId="3">
                    <Row>
                        <VerTodasSolicitudesL/>            
                    </Row>
                    </TabPane>
                    <TabPane tabId="4">
                    <Row>
                        <VerTodasSolicitudesAlta/>            
                    </Row>
                    </TabPane>
                    <TabPane tabId="5">
                    <Row>
                        <VerSolicitudes/> 
                    </Row>
                    </TabPane>         
                    <TabPane tabId="6">
                    <Row>

        <React.Fragment  >
        
            <Table dark  className="container" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre Sala</th>
                    <th>Tipo Sala</th>
                    <th>Estado</th>
                </tr>
            </thead>            
            <tbody >
                <React.Fragment >
                    {
                    this.state.data.map(a => {
                        const {id, estado, pabellon,tipo } = a;                 
                        var color = ""
                        if(estado === "Disponible"){
                            color = "text-primary"
                        }
                        else{
                            color = "text-danger"
                        }
                        return (
                            <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{pabellon}</td>
                            <td  >{tipo}</td>
                            <td class={color}>{estado}</td>
                            </tr>
                        );
                    })}
                                  
                </React.Fragment>
            </tbody>
        </Table>
      </React.Fragment>

                    </Row>
                    </TabPane>
                </TabContent>
                </div>
            );
        }
        return(<Example/>);
    }}


export default OpcionesMedico;