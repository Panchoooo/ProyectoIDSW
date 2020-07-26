import React, { useState, Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';


import CrearSolicitud from './CrearSolicitud.js';
import VerTodasSolicitudesP from './VerTodasSolicitudesP.js';
import VerTodasSolicitudesEP from './VerTodasSolicitudesEP.js';
import VerTodasSolicitudesL from './VerTodasSolicitudesL.js';
import VerTodasSolicitudesAlta from './VerTodasSolicitudesAlta.js';
import VerSolicitudes from './VerSolicitudes.js';

class OpcionesMedico extends Component{
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
                        onClick={() => { toggle('1'); }}
                    >
                        Solicitudes Pendientes
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Solicitudes en Espera
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Solicitudes Listas
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}
                    >
                        Dado de Alta
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '5' })}
                        onClick={() => { toggle('5'); }}
                    >
                        Ver Todas
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '6' })}
                        onClick={() => { toggle('6'); }}
                    >
                        Solicitud de Recursos
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
                        <Col sm="12">
                        <VerTodasSolicitudesEP/>
                        </Col>
                    </Row>
                    </TabPane>
                    <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                        <VerTodasSolicitudesL/>
                        </Col>
                    </Row>
                    </TabPane>
                    <TabPane tabId="4">
                    <Row>
                        <VerTodasSolicitudesAlta />
                    </Row>
                    </TabPane>
                    <TabPane tabId="5">
                    <Row>
                        <VerSolicitudes/>
                    </Row>
                    </TabPane>
                    <TabPane tabId="6">
                    <Row>
                        <CrearSolicitud />
                    </Row>
                    </TabPane>
                </TabContent>
                </div>
            );
        }
        return(<Example/>);
    }}


export default OpcionesMedico;