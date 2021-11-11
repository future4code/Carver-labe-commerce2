import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Produto from './components/Produto/Produto';
import Carrinho from './components/Carrinho/Carrinho';
// import CardProduto from './components/Produto/CardProduto';
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

export default class App extends React.Component{
  state = {
    carrinho: [],
    listaProdutos: true,
    paginas: "home"
  }

  renderizaPaginas = () => {
    switch(this.state.paginas) {
      case "home":
        return <Produto />;
      case "carrinho":
        return <Carrinho produtosCarrinho={this.state.carrinho} />;
      default:
        return <Produto />
    }
  }

  paginaCarrinho = () => {
    this.setState({pagina: "carrinho"})
  }

  paginaProdutos = () => {
    this.setState({pagina: "home"})
  }

  

  acrescentarProdutoCarrinho = (produto) => {
    const carrinhoAtual = [...this.state.carrinho]
    const itemNoCarrinho = carrinhoAtual.findIndex(item => item.id === produto.id);

    if (itemNoCarrinho) {
      const produtoAdicionado = this.state.carrinho.map((item) => {
        return {...item,
          quantidade: carrinhoAtual[itemNoCarrinho].quantidade + 1
        }
      })
      this.setState({ carrinho:produtoAdicionado })
    } else {
        carrinhoAtual.push({ ...produto, quantidade:1 })
        this.setState({ carrinho: carrinhoAtual })
    }
  }

  render() {

    return (
      <div>
        <GlobalStyle />
        <Header/>
        <MainContainer>
          <Produto />
          <Carrinho />
        </MainContainer>
        <Footer/>
      </div>
    );
  }
}