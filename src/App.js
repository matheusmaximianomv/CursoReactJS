/* Componentes de Desenvolvimento */
import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/* Folha de Estilo */
import './estilo.css';

/* Componentes Gerais */
import Cabecalho from './Components/Cabecalho/Cabecalho';
import Inicio from './Components/Inicio/Inicio';
import Servicos from './Components/Servicos/Servicos';
import Portfolio from './Components/Portfolio/Portfolio';
import Precos from './Components/Precos/Precos';
import Contato from './Components/Contato/Contato';
import Rodape from './Components/Rodape/Rodape';

/* Área Administrativa */
import painelAdmin from './admin/Painel/Painel';
import Login from './admin/Login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
          
          <Route path = '/' exact component = {Inicio} />
          <Route path = '/servicos' component = {Servicos} />
          <Route path = '/portfolio' component = {Portfolio} />
          <Route path = '/precos' component = {Precos} />
          <Route path = '/contato' component = {Contato} />

          <Route path = '/admin' component = {painelAdmin} /> 
          <Route path = '/login' component = {Login} />
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
