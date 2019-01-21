import React from 'react';

const Card = props => {
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src={props.conteudo.img} alt='' width='160px' height='160px' />
                <p><strong>{props.conteudo.title}</strong></p>
                <p>{props.conteudo.description}</p>
            </div>
        </div>
    );
}

export default Card;

