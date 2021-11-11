import React from 'react';
import Produto from '../Produto/Produto';

export class Filtro extends React.Component {
    state = {
        produtos: produtos,
        query: "",
        precoMinimo: "",
        precoMaximo: "",
        sortingParameter: "nome",
        order: 1
    }
    
    onchangeQuery = (event) => {
        this.setState({
            query: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}