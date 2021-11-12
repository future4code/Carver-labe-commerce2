import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { produtos } from './components/Produto/Produto';
import Carrinho from './components/Carrinho/Carrinho';
import CardProduto from './components/Produto/CardProduto';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const GlobalStyle = createGlobalStyle `
    *{
      margin: 0;
      padding: 0;
      font-family: 'Sitka', sans-serif;
    }
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;

`
const TelaProdutos = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
`

export default class App extends React.Component{
  state = {
    carrinho: [],
    produtos: produtos,
    pagina: true
  }

  // renderizaPaginas = () => {
  //   switch(this.state.paginas) {
  //     case "home":
  //       return <Produto />;
  //     case "carrinho":
  //       return <Carrinho produtosCarrinho={this.state.carrinho} />;
  //     default:
  //       return <Produto />
  //   }
  // }

  // Funções para trocar de página 
  paginaCarrinho = () => {
    this.setState({pagina: !this.state.pagina})
  }


  //Funções para adionar e removar produtos do carrinho
  adicionarProduto = (id) => {
    const itemCarrinho = this.state.carrinho.find((produto) => id === produto.id);
    if(itemCarrinho) {
      const novoCarrinho = this.state.carrinho.map((produto) => {
        if(id === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          };
        }
        return produto;
      });
      this.setState({ carrinho: novoCarrinho })
    }else {
      const itemParaAdicionar = this.state.produtos.find((produto) => id === produto.id);
      const carrinhoAtual = [
        ...this.state.carrinho,
        {...itemParaAdicionar, quantidade: 1}
      ];
      this.setState({ carrinho: carrinhoAtual })
    }
  }

  removerProduto = (id) => {
    const retirarItem = [...this.state.carrinho];
    const item = retirarItem.filter((produto) => {
      return produto.id !== id;
    })
    this.setState({carrinho: item})
  }

  // Funções para aumentar ou diminuir a quantidade de produtos no carrinho
  adicionarQuantidade = (item) => {
    const carrinhoAtual = this.state.carrinho.map((produto) =>  {
      if(item.id === produto.id) {
        return {
          ...item, 
          quantidade: produto.quantidade + 1
        }  
      }
      return produto;
    })
    this.setState({ carrinho: carrinhoAtual })
  }

  diminuirQuantidade = (item) => {
    const carrinhoAtual = this.state.carrinho.map((produto) =>  {
      if(item.id === produto.id && produto.quantidade > 1) {
        return {
          ...item, 
          quantidade: produto.quantidade - 1
        }  
      }
      return produto;
    })
    this.setState({ carrinho: carrinhoAtual })
  }

  render() {
    //Renderização dos produtos na tela principal
    const teste = this.state.produtos.map((produto) => {
      return(
          <CardProduto
             key={produto.id}  
             image={produto.image}              
             nome={produto.nome}   
             valor={produto.valor}
             adicionarProduto = {() => this.adicionarProduto(produto.id)}
          />
          
      )
    })

    //Retorno das telas
    if(this.state.pagina) {
      return (
        <div>
          <GlobalStyle />
          <Header
            paginaCarrinho = { this.paginaCarrinho }
          />
            <TelaProdutos>
              { teste }
            </TelaProdutos>
          <Footer/>
        </div>
      )  
    }
    else {
      return (
        <div>
          <GlobalStyle />
          <Header
            paginaCarrinho = { this.paginaCarrinho }
          />
          <MainContainer>
            <Carrinho 
              carrinho={this.state.carrinho} 
              removerProduto = {this.removerProduto}
              adicionarQuantidade={this.adicionarQuantidade}
              diminuirQuantidade={this.diminuirQuantidade}
            />
          </MainContainer>
          <Footer/>
        </div>
      ) 
    }
  }
}