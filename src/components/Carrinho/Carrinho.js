import React from "react";
import { PaginaCarrinho, CardCompra, DescricaoProduto, IdentificaProduto, BotaoDeletar, AreaQuantidade, ResumoCompra, ItensResumoCompra, TextoResumoCompra, CarrinhoVazio, BotaoLimpar } from './StyledCarrinho';
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
    return (this.valorTotalCarrinho(this.props.carrinho)/10).toFixed(2)
  }

  render() {
    const produtosNoCarrinho = this.props.carrinho.map((produto) => {
      return (
        <CardCompra key={produto.id}>
          <DescricaoProduto>
            <IdentificaProduto>
              <img src={produto.image} alt={produto.nome} />
              <div>
                <p><em>{produto.nome}</em></p>
                <p>{produto.descricao}</p>
              </div>
            </IdentificaProduto>
            <BotaoDeletar src={ Remover } alt="Botão de remover produto" onClick={() => this.props.removerProduto(produto.id)} />
            </DescricaoProduto>
            <hr />
            <DescricaoProduto>
              <AreaQuantidade>
                <h4>Quantidade: <button onClick={() => this.props.diminuirQuantidade(produto)}> - </button>  <span>{produto.quantidade}</span>  <button onClick={() => this.props.adicionarQuantidade(produto)}> + </button></h4>
              </AreaQuantidade>
              <p>¢ {this.valorTotalProduto(produto.valor, produto.quantidade)}</p>
            </DescricaoProduto>
          </CardCompra>
        );
      });

      const resumoCompra = 
      <div>
        <h2>SUA COMPRA</h2>
        <ResumoCompra>
          <ItensResumoCompra>
            <h2>★ Você escolheu:</h2>
            <p> {this.props.totalItens(this.props.carrinho)} item(s) </p>
          </ItensResumoCompra>
          <ItensResumoCompra>
            <h2>★ Subtotal:</h2>
            <p>¢ {this.valorTotalCarrinho(this.props.carrinho)}</p>
          </ItensResumoCompra>
          <ItensResumoCompra>
          <h2>★ Frete:</h2>
          <p>GRÁTIS</p>
          </ItensResumoCompra>
          <ItensResumoCompra>
            <h1>★ Total:</h1>
            <h1>¢ {this.valorTotalCarrinho(this.props.carrinho)}</h1>
          </ItensResumoCompra>
          <TextoResumoCompra>
            <p>Utilize o F4Card e pague em até 10x de ¢ {this.ofertaCompra()}</p>
            <p>SEM JUROS!</p>
          </TextoResumoCompra>
          <div>
            <button>FINALIZAR COMPRA</button>
            <button onClick={this.props.paginaCarrinho}>QUERO MAIS PRODUTOS</button>
          </div>
        </ResumoCompra>
      </div>

      const carrinhoVazio = 
      <div>
        <img src={ CarroVazio } alt="Carrinho vazio" /> 
        <h2>Ops... Carrinho Vazio!</h2>
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
                <BotaoLimpar onClick={() => {this.props.limparCarrinho()}}>Limpar Carrinho</BotaoLimpar>
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
