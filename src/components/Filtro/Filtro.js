import React from "react";
import styled from "styled-components";
import Filtro from "../../icones/filter_alt_black_24dp.svg";

export const BarraFiltros = styled.details`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  margin: 0px 10px;

  summary {
    text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem;
    list-style: none;
    display: flex;
  }

  input {
    margin-bottom: 20px;
    height: 30px;
    padding: 4px 8px;
    border: 1px solid #cecece;
    border-radius: 4px;
  }

  p {
    margin-left: 6rem;

    :hover {
      cursor: pointer;
      color: #27536b
    }
  }

  @media (max-width: 800px) {
    display: inline;
    summary {
      font-size: 1rem;
    }
    input {
      margin: 0 2px 10px;
    }

    p {
      font-size: 0.8rem;
      margin-left: 5px;
    }
  }
`;

export default function Filters(props) {
  return (
    <BarraFiltros>
      <summary>
        <img src={Filtro} alt="Filtro" />
        <h4>FILTROS</h4>
      </summary>
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

      <p onClick={() => props.limparFiltro()}>Limpar</p>
    </BarraFiltros>
  );
}
