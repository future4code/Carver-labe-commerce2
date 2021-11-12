import React from "react";
import { PaginaCarrinho, CardCompra, DescricaoProduto, AreaQuantidade, CarrinhoVazio } from './StyledCarrinho'

export default class Carrinho extends React.Component {
  valorTotalProduto = (preco, quantidade) => {
    const total = (preco * quantidade).toFixed(2);
    return total;
  };

  valorTotalCarrinho = (listaProdutos) => {
    let valorTotal = 0;
    for (let produto of listaProdutos) {
      valorTotal += produto.valor * produto.quantidade;
    }
    return (valorTotal).toFixed(2);
  };

  render() {
    const produtosNoCarrinho = this.props.carrinho.map((produto) => {
        return (
          <CardCompra key={produto.id}>
            <DescricaoProduto>
              <img src={produto.image} alt="Nave" />
              <p>{produto.nome}</p>
              <button onClick={() => this.props.removerProduto(produto.id)}>Remover</button>
            </DescricaoProduto>
            <div></div>
            <div>
              <AreaQuantidade>
                <p>Quantidade:</p>
                <button onClick={() => this.props.diminuirQuantidade(produto)}>-</button>
                <p>{produto.quantidade}</p>
                <button onClick={() => this.props.adicionarQuantidade(produto)}>+</button>
              </AreaQuantidade>
              <p>{this.valorTotalProduto(produto.valor, produto.quantidade)}</p>
            </div>
          </CardCompra>
        );
      });

    if (this.props.carrinho.length > 0) {
      return (
        <div>
          <div>
            <h1>Itens Adicionados</h1>
          </div> 
          <PaginaCarrinho>
            <div>
              {produtosNoCarrinho}
            </div>
            <div>
              <h2>Total</h2>
              <p>{this.valorTotalCarrinho(this.props.carrinho)}</p>
            </div>
          </PaginaCarrinho> 
        </div>
      );
    } else {
      return (
        <CarrinhoVazio>
          <h2>Carrinho Vazio</h2>
        </CarrinhoVazio>
      );
    }
  }
}
