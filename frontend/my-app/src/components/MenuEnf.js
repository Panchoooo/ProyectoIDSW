import React,{ Component } from 'react';
import './css/Menu.css';
import Header from './Componentes/Header.js'
import OpcionesEnfermer from './Componentes/OpcionesEnfermer.js'

class Menu extends Component{

  render(){
    return(  
      <div>
        <header>
          <Header/>
        </header>
        <section >
          <OpcionesEnfermer/>
        </section>
      </div>
    );
  }
}

export default Menu;