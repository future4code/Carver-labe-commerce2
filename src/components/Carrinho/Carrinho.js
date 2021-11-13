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
                <p>Quantidade: <button onClick={() => this.props.diminuirQuantidade(produto)}> - </button>  {produto.quantidade}  <button onClick={() => this.props.adicionarQuantidade(produto)}> + </button> </p>
              </AreaQuantidade>
              <p>¢ {this.valorTotalProduto(produto.valor, produto.quantidade)}</p>
            </div>
          </CardCompra>
        );
      });

      const resumoCompra = 
      <div>
        <h1>SUA COMPRA</h1>
        <div>
          <div>
            <h2>★ Você escolheu:</h2>
            <span> {this.props.totalItens(this.props.carrinho)} item(s) </span>
          </div>
          <div>
            <h2>★ Subtotal:</h2>
            <p>¢ {this.valorTotalCarrinho(this.props.carrinho)}</p>
          </div>
          <h2>★ Frete:</h2>
          <h3>GRÁTIS</h3>
          <div>
            <h1>★ Total:</h1>
            <h2>¢ {this.valorTotalCarrinho(this.props.carrinho)}</h2>
          </div>
          <div>
            <p>Utilize o LabeCard e pague em</p>
            <p>até 15x de ¢ {this.ofertaCompra()}</p>
            <p>SEM JUROS!</p>
          </div>
          <div>
            <button>FINALIZAR COMPRA</button>
            <button onClick={this.props.paginaCarrinho}>QUERO MAIS PRODUTOS</button>
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
                <h2>★ CARRINHO</h2>
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
