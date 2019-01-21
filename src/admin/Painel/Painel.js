import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { auth } from '../../firebase-config';
import AdminMenu from '../AdminMenu/AdminMenu';
import AdminPortfolio from '../AdminPortfolio/AdminPortfolio'

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logando: true,
            autenticado: false,
            user: null,
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                logando: false,
                autenticado: !!user,
                user,
            })
        })
    }

    render() {

        if (this.state.logando) {
            return (
                <p style = {{textAlign : "center"}}><span className="glyphicon glyphicon-refresh"></span></p>
            )
        }

        if (!this.state.autenticado) {
            return <Redirect to='/login' />
        }

        return (
            <div className="painel-adm container" style={{ padding: '30px' }}>
                <h2 style = {{textAlign:'center'}}>Painel Administrativo</h2>
                <Route path={'/'} component={AdminMenu} />
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
            </div>
        );
    }
}

export default Admin;