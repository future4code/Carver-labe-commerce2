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

const AreaProdutos = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat()(4, 1fr);
`

export default class App extends React.Component{
  state = {
    carrinho: [],
    produtos: produtos,
    listaProdutos: true
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

  paginaCarrinho = () => {
    this.setState({ listaProdutos: !this.state.listaProdutos })
  }

  render() {
    const teste = this.state.produtos.map((produto) => {
          return(
              <CardProduto
                 key={produto.id}  
                 image={produto.image}              
                 nome={produto.nome}   
                 valor={produto.valor}
                 acrescentarProdutoCarrinho ={() => this.acrescentarProdutoCarrinho(produto.id)}
              />
            
          )
    });

    return (
      <div>
        <GlobalStyle />
        <Header/>
        <MainContainer>
          <AreaProdutos>
            { teste }
          </AreaProdutos> 
          <Carrinho />
        </MainContainer>
        <Footer/>
      </div>
    );
  }
}