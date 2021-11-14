import React from 'react';
import styled from 'styled-components';

export const BarraFiltros = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    width: 90vw;
    margin-top: 100px;
    border-color: blue;
`


/*export default class Filtro extends React.Component {
    
     render() {*/
        export default function Filters(props) {
        return (
            <div>
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
        )
    }

