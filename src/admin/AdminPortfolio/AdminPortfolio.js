import React, { Component } from 'react';

import config, { storage } from './../../firebase-config';

export default class AdminPortfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            estaGravando: false,
        }

        //this.gravarPortfolio = this.gravarPortfolio.bind(this);
    }

    gravarPortfolio = (event) => {
        event.preventDefault(event);

        const itens = {
            title : this.titulo.value,
            description : this.descricao.value,
        }

        this.setState({estaGravando : true}); 
        console.log("Gravando o Novo Portfolio");

        const arquivo = this.imagem.files[0];

        const { name } = arquivo;

        const ref = storage.ref(name);
        
        ref.put(arquivo).then(img => {
            img.ref.getDownloadURL().then(
                downloadURL => {

                    const novoPortfolio = {
                        title : itens.title,
                        description : itens.description,
                        img : downloadURL,
                    }

                    config.push('portfolio', {
                        data: novoPortfolio,
                    });
                },
                this.setState({estaGravando : false})
            );
        });
    }

    render() {
        if (this.state.estaGravando) {
            return (
                <div className="container">
                    <p style={{textAlign:"center"}}><span className="glyphicon glyphicon-refresh"></span>Aguarde...</p>
                </div>
            )
        }
        return (
            <div style = {{padding:'30px'}}>
                <h2 style = {{textAlign:'center'}}>Portfólio - Área Administrativa</h2>
                <form onSubmit={this.gravarPortfolio}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Imagem do Item</label>
                        <input type="file" className="form-control-file" id="imagem" ref={ref => this.imagem = ref} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Título">Título do Novo Item</label>
                        <input type="text" className="form-control" id="titulo" aria-describedby="textNameHelp" placeholder="Entre com o novo nome do item" ref={ref => this.titulo = ref} /></div>
                    <div className="form-group">
                        <label htmlFor="descricap">Descrição</label>
                        <textarea className="form-control" id="descricao" rows="3" ref={ref => this.descricao = ref}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
    }
}