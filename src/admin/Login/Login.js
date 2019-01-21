import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { auth } from '../../firebase-config';

import './style.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autenticado: false,
            logando: false,
            erro: false,
        }

        this.email = null;
        this.senha = null;
    }

    autenticar = (event) => {
        event.preventDefault(event);

        this.setState({logando : true, erro : false});
        auth.signInWithEmailAndPassword(this.email.value, this.senha.value).then(
            user => {
                console.log('Usuário Logado, ', user);
                this.setState({autenticado : true});
            }
        ).catch(
            console.log('Erro de Autenticação'),
            this.setState({erro : true, autenticado: false, logando : false})
        );
    }

    render() {

        if(this.state.autenticado === true) {
           return <Redirect to='/admin' />
        }

        return (
            <div className='login'>
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Endereço de Email</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Digite seu Email" ref={ref => this.email = ref} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="InputPassword" placeholder="Senha" ref={ref => this.senha = ref} />
                    {this.state.erro && <small id="emailHelp" className="form-text text-muted">O usuário ou senha estão incorretos.</small>}
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="Check" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Matenha-me Conectado</label>
                </div>
                <button type="button" disabled={this.state.logando === true}className="btn btn-primary" onClick={this.autenticar}>Enviar</button>
            </div>
        );
    }

}