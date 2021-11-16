import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 10%;
  box-shadow: 2px 2px 5px #a3a3a3;
  padding: 0 1rem 1rem;
  max-width: 200px;
  align-items: center;
  border-radius: 4px;

  button {
    margin-top: 8px;
    width: 85%;
    padding: 0.5rem 0;
    border-radius: 5px;
    border: 1px solid #f0c244;
    background-color: #ffffff;

    :hover {
      background-color: #f0c244;
    }
  }

  @media (max-width: 800px) {
    margin: 5%;

    h3 {
      font-size: 0.8rem;
      padding: 0;
    }

    button {
      width: 100%;
    }
  }
`;
const ProductImage = styled.img`
  margin: 5px 2px;
  width: 14rem;

  @media (max-width: 800px) {
    margin: 5px 0;
    width: 10rem;
  }
`;

export default class CardProduto extends React.Component {
  render() {
    return (
      <ProductContainer>
        <ProductImage alt={"Foto do produto"} src={this.props.image} />
        <h3>{this.props.nome}</h3>
        <p>¢ {this.props.valor}</p>
        <p>{this.props.descricao}</p>
        <button onClick={this.props.adicionarProduto} key={this.props.id}>
          Adicionar ao Carrinho
        </button>
      </ProductContainer>
    );
  }
}
