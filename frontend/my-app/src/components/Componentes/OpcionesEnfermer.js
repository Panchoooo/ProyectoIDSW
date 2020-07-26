import React, { useState, Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';


//import CrearSolicitud from './CrearSolicitud.js';
//import VerTodasSolicitudesP from './VerTodasSolicitudesP.js';
import VerTodasSolicitudesEP from './VerTodasSolicitudesEP.js';
import VerTodasSolicitudesL from './VerTodasSolicitudesL.js';

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
                        Ver Traslados Pendientes
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Ver Traslados Listos
                    </NavLink>
                    </NavItem>

                </Nav>


                <TabContent activeTab={activeTab} className="py-5">
                    <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                        <VerTodasSolicitudesEP/>
                        </Col>
                    </Row>
                    </TabPane>
                    <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                        <VerTodasSolicitudesL/>
                        </Col>
                    </Row>
                </TabPane>

                </TabContent>
                </div>
            );
        }
        return(<Example/>);
    }}


export default OpcionesMedico;