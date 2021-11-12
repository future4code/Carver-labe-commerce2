import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  button {
    width: 35%;
  }
`;
const ProductImage = styled.img`
  margin: 5px;
  padding: 5px;
  width: 150px;
`;

export default class CardProduto extends React.Component {
  render() {
    return (
      <ProductContainer>
        <ProductImage alt={"Foto do produto"} src={this.props.image} />
        <p>{this.props.nome}</p>
        <p>¢ {this.props.valor}</p>
        <button onClick={this.props.adicionarProduto} key={this.props.id}>
          Adicionar ao Carrinho
        </button>
      </ProductContainer>
    );
  }
}
