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
  grid-template-columns: 6fr 1fr;

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
    paginas: true
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

  paginaCarrinho = () => {
    this.setState({pagina: false})
  }

  paginaProdutos = () => {
    this.setState({pagina: true})
  }

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

  render() {

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

    return (
      <div>
        <GlobalStyle />
        <Header/>
        <MainContainer>
          <TelaProdutos>
            { teste }
          </TelaProdutos>
          <Carrinho />
        </MainContainer>
        <Footer/>
      </div>
    );
  }
}