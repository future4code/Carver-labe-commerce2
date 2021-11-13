import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  margin: 5% 18%;
  box-shadow: 2px 2px 5px gray;
  padding: 1rem;
  max-width: 200px;
  background: transparent;

  button {
    width: 85%;
    position: center;
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
        <h1>¢ {this.props.valor}</h1>
        <p>{this.props.nome}</p>
        <p>{this.props.descricao}</p>
        <button onClick={this.props.adicionarProduto} key={this.props.id}>
          Adicionar ao Carrinho
        </button>
      </ProductContainer>
    );
  }
}
