import React from 'react';
import styled from 'styled-components';
import { produtos } from '../Produto/Produto';
import CardProduto from '../Produto/CardProduto';

export const BarraFiltros = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    width: 90vw;
    margin-top: 100px;
    border-color: blue;
`


const ListaDeProdutos = produtos.map((produto) => {
        return(
            <CardProduto
               key={produto.id}  
               image={produto.image}              
               nome={produto.nome}   
               valor={produto.valor}
               adicionarProduto = {() => this.adicionarProduto(produto.id)}
            />
        )}
)

export function Filtros(props) {
    return <div>
        <input
            placeholder="Busca por nome"
            value={props.query}
            onChange={props.onchangeQuery}
        />

        <input
            type="number"
            placeholder="Preço mínimo"
            value={props.precoMinimo}
            onChange={props.onchangePrecoMinimo}
            />

        <input
            type="number"
            placeholder="Preço máximo"
            value={props.precoMaximo}
            onChange={props.onchangePrecoMaximo}
            />

        <span>
            <label for="order">Ordenar:</label> 
            <select
            
            name="order"
            value={props.order}
            onChange={props.onchangeOrder}
            >
                <option value={1}>Preço - Crescente</option>
                <option value={-1}>Preço - Decrescente</option> 
            </select>
        </span>
    
    </div>
    
}


export class Filtro extends React.Component {
    state = {
        produtos: ListaDeProdutos,
        query: "",
        precoMinimo: "",
        precoMaximo: "",
        sortingParameter: "crescente",
        order: 1
    }
    
    onchangeQuery = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    onchangePrecoMinimo = (event) => {
        this.setState({
            precoMinimo: event.target.value
        })
    }
    onchangePrecoMaximo = (event) => {
        this.setState({
            precoMaximo : event.target.value
        })
    }
    onchangeSortingParameter = (event) => {
        this.setState({
            order: event.target.value
        })
    }
    onchangeOrder = (event) => {
        this.setState({
            order: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <Filtros>
                query={this.state.query}
                onchangeQuery={this.onchangeQuery}
                onchangePrecoMinimo={this.onchangePrecoMinimo}
                onchangePrecoMaximo={this.onchangePrecoMaximo}
                onchangeSortingParameter={this.onchangeSortingParameter}
                onchangeOrder={this.onchangeOrder}
                precoMinimo={this.state.precoMinimo}
                precoMaximo={this.state.precoMaximo}
                sortingParameter={this.state.sortingParameter}
                order={this.state.order}
                </Filtros>
                <div>
                    {this.state.produto
                    .filter(produto => {
                        return produto.nome.toLowerCase().includes(this.state.query.toLowerCase())
                    })
                    .filter(produto => {
                        return this.state.precoMinimo === "" || produto.valor >= this.state.precoMinimo
                    })
                    .filter(produto => {
                        return this.state.precoMaximo === "" || produto.valor <= this.state.precoMaximo
                    })
                    .sort((a,b) => {
                        switch (this.state.sortingParameter) {
                            case "crescente":
                                return this.state.order * (a.valor - b.valor)
                            case "decrescente":
                                return this.state.order *(b.valor - a.valor)    
                                break;
                        }
                    })
                   
                    }
                </div>
            </div>
        )
    }
}

