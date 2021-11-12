import React from "react";
import { PaginaCarrinho, CardCompra, DescricaoProduto, BotaoDeletar, AreaQuantidade, CarrinhoVazio } from './StyledCarrinho';
import Remover from '../../icones/delete.svg'
import CarroVazio from '../../icones/shopping-cart-180px.svg'

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

  ofertaCompra = () => {
    return (this.valorTotalCarrinho(this.props.carrinho)/15).toFixed(2)
  }

  

  render() {
    const produtosNoCarrinho = this.props.carrinho.map((produto) => {
        return (
          <CardCompra key={produto.id}>
            <DescricaoProduto>
              <img src={produto.image} alt={produto.nome} />
              <p>{produto.nome}</p>
              <BotaoDeletar src={ Remover } alt="Botão de remover produto" onClick={() => this.props.removerProduto(produto.id)} />
            </DescricaoProduto>
            <div></div>
            <div>
              <AreaQuantidade>
                <p>Quantidade:</p>
                <button onClick={() => this.props.diminuirQuantidade(produto)}>-</button>
                <p>{produto.quantidade}</p>
                <button onClick={() => this.props.adicionarQuantidade(produto)}>+</button>
              </AreaQuantidade>
              <p>¢ {this.valorTotalProduto(produto.valor, produto.quantidade)}</p>
            </div>
          </CardCompra>
        );
      });

      const resumoCompra = 
      <div>
        <h2>Resumo da compra</h2>
        <div>
          <div>
            <h4>Total de Itens</h4>
            <span>{this.props.totalItens(this.props.carrinho)}</span>
          </div>
          <div>
            <h4>Subtotal</h4>
            <p>¢ {this.valorTotalCarrinho(this.props.carrinho)}</p>
          </div>
          <h4>Frete</h4>
          <p>GRÁTIS</p>
          <div>
            <h2>Total</h2>
            <p>¢ {this.valorTotalCarrinho(this.props.carrinho)}</p>
          </div>
          <div>
            <p>Utilize o F4Card e pague ¢ {this.valorTotalCarrinho(this.props.carrinho)} em até 15x de ¢ {this.ofertaCompra()} sem juros</p>
          </div>
          <div>
            <button>FINALIZAR PEDIDO</button>
            <button onClick={this.props.paginaCarrinho}>ESCOLHER MAIS PRODUTOS</button>
          </div>
        </div>
      </div>

      const carrinhoVazio = 
      <div>
        <img src={ CarroVazio } alt="Carrinho vazio" /> 
        <h2>Carrinho Vazio</h2>
        <button onClick={this.props.paginaCarrinho}>VOLTAR PARA A PÁGINA INICIAL</button>
      </div>

    if (this.props.carrinho.length > 0) {
      return (
        <div>
          <PaginaCarrinho>
            <div>
              <div>
                <h2>Meu Carrinho</h2>
              </div> 
              {produtosNoCarrinho}
              <div>
                <button onClick={() => {this.props.limparCarrinho()}}>Limpar Carrinho</button>
              </div>
            </div>
            <div>
              { resumoCompra }
            </div>
          </PaginaCarrinho> 
        </div>
      );
    } else {
      return (
        <CarrinhoVazio>
          { carrinhoVazio }
        </CarrinhoVazio>
      );
    }
  }
}
