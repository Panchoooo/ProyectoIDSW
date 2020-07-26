import React,{ Component } from 'react';
import './css/Menu.css';
import Header from './Componentes/Header.js'
import OpcionesMedico from './Componentes/OpcionesMedico.js'

class Menu extends Component{

  render(){
    return(  
      <div>
        <header>
          <Header/>
        </header>
        <section>
          <OpcionesMedico/>
        </section>
      </div>
    );
  }
}

export default Menu;