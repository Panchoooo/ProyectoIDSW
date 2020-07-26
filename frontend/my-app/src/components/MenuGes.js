import React,{ Component } from 'react';
import './css/Menu.css';
import Header from './Componentes/Header.js'
import OpcionesGestor from './Componentes/OpcionesGestor.js'

class Menu extends Component{

  render(){
    return(  
      <div>
        <header>
          <Header/>
        </header>
        <section >
          <OpcionesGestor/>
        </section>
      </div>
    );
  }
}

export default Menu;