import React from 'react';
import '../css/Header.css';

export class Header extends React.Component{
    render(){

          return(
            <nav className="navbar navbar-expand navbar-dark bg-dark">
          <h1 className="navbar-brand py-2 "> Menu</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="Menu"> <span className="sr-only">(current)</span></a>
              </li>

            </ul>
    
            <form className="form-inline my-2 my-md-0">
              <a className="nav-link btn btn-outline-light btn-sm" href="Login">Cerrar Sesion</a>
            </form>
          </div>
        </nav>
          );  
    }
}

export default Header;