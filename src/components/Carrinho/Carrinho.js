import React from "react";

export default class Carrinho extends React.Component {
  valorTotalProduto = (preco, quantidade) => {
    const total = preco * quantidade;
    return total;
  };

  valorTotalCarrinho = (listaProdutos) => {
    let valorTotal = 0;
    for (let produto of listaProdutos) {
      valorTotal += produto.preco * produto.quantidade;
    }
    return valorTotal;
  };

  render() {
    const produtosNoCarrinho = this.props.carrinho && this.props.carrinho.map((produto) => {
        return (
          <div key={produto.id}>
            <img src={produto.image} alt="Nave" />
          </div>
        );
      });

    if (this.props.carrinho && this.props.carrinho.length > 0) {
      return (
        <div>
          <div>
            <h1>Itens Adicionados</h1>
          </div>
          {produtosNoCarrinho}
        </div>
      );
    } else {
      return (
        <div>
          <h2>Carrinho Vazio</h2>
        </div>
      );
    }
  }
}
