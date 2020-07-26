
import React , {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';

import Login from './components/Login.js';
import RegistroMed from './components/RegistroMed.js';
import RegistroGes from './components/RegistroGes.js';
import RegistroEnf from './components/RegistroEnf.js';
import RegistroPab from './components/RegistroPab.js';
import MenuMed from './components/MenuMed.js';
import MenuGes from './components/MenuGes.js';
import MenuEnf from './components/MenuEnf.js';
import DetallesSolicitud from './components/Componentes/DetallesSolicitud.js';
import GestionarSolicitud from './components/Componentes/GestionarSolicitud.js';

class App extends Component{

  constructor(){
    super();
    this.state = {};
  }

  render() {
      return (
          <Router>
          <ReactNotifications />
              <Switch>
                  <Route path='/login' exact={true} component={Login} />
                  <Route path='/' exact={true} component={Login} />
                  <Route path='/RegistroMed' exact={true} component={RegistroMed} />
                  <Route path='/RegistroGes' exact={true} component={RegistroGes} />
                  <Route path='/RegistroEnf' exact={true} component={RegistroEnf} />
                  <Route path='/RegistroPab' exact={true} component={RegistroPab} />
                  <Route path='/menuMed' exact={true} component={MenuMed} />
                  <Route path='/menuGes' exact={true} component={MenuGes} />
                  <Route path='/menuEnf' exact={true} component={MenuEnf} />
                  <Route path='/detalles' exact={true} component={DetallesSolicitud} />
                  <Route path='/gestionar' exact={true} component={GestionarSolicitud} />
              </Switch>
          </Router>
      );

  }
}


export default App;


