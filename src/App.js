import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { produtos } from "./components/Produto/Produto";
import Carrinho from "./components/Carrinho/Carrinho";
import CardProduto from "./components/Produto/CardProduto";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filtro from "./components/Filtro/Filtro";

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      font-family: 'Franklin Gothic Medium', sans-serif;
      color: #082032;
    }
`;

const TelaProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export default class App extends React.Component {
  state = {
    carrinho: [],
    produtos: produtos,
    pagina: true,
    query: "",
    precoMinimo: "",
    precoMaximo: "",
    sortingParameter: "crescente",
    order: 1,
  };
  
  /***************************************************LOCAL STORAGE***************************************************/
  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
  }

  componentDidMount() {
    const modificarCarrinho = localStorage.getItem("carrinho");
    if (modificarCarrinho) {
      this.setState({ carrinho: JSON.parse(modificarCarrinho) });
    }
  }

  /*****************************************************FILTROS*****************************************************/
  onchangeQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  onchangePrecoMinimo = (event) => {
    this.setState({
      precoMinimo: event.target.value,
    });
  };
  onchangePrecoMaximo = (event) => {
    this.setState({
      precoMaximo: event.target.value,
    });
  };
  onchangeSortingParameter = (event) => {
    this.setState({
      order: event.target.value,
    });
  };
  onchangeOrder = (event) => {
    this.setState({
      order: event.target.value,
    });
  };

  /*****************************************************CARRINHO*****************************************************/
  // Funções para trocar de página
  paginaCarrinho = () => {
    this.setState({ pagina: !this.state.pagina });
  };

  //Funções para adicionar e removar produtos do carrinho
  adicionarProduto = (id) => {
    const itemCarrinho = this.state.carrinho.find(
      (produto) => id === produto.id
    );
    if (itemCarrinho) {
      const novoCarrinho = this.state.carrinho.map((produto) => {
        if (id === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1,
          };
        }
        return produto;
      });
      this.setState({ carrinho: novoCarrinho });
    } else {
      const itemParaAdicionar = this.state.produtos.find(
        (produto) => id === produto.id
      );
      const carrinhoAtual = [
        ...this.state.carrinho,
        { ...itemParaAdicionar, quantidade: 1 },
      ];
      this.setState({ carrinho: carrinhoAtual });
    }
  };

  removerProduto = (id) => {
    const retirarItem = [...this.state.carrinho];
    const item = retirarItem.filter((produto) => {
      return produto.id !== id;
    });
    this.setState({ carrinho: item });
  };

  // Funções para aumentar ou diminuir a quantidade de produtos no carrinho
  adicionarQuantidade = (item) => {
    const carrinhoAtual = this.state.carrinho.map((produto) => {
      if (item.id === produto.id) {
        return {
          ...item,
          quantidade: produto.quantidade + 1,
        };
      }
      return produto;
    });
    this.setState({ carrinho: carrinhoAtual });
  };

  diminuirQuantidade = (item) => {
    const carrinhoAtual = this.state.carrinho.map((produto) => {
      if (item.id === produto.id && produto.quantidade > 1) {
        return {
          ...item,
          quantidade: produto.quantidade - 1,
        };
      }
      return produto;
    });
    this.setState({ carrinho: carrinhoAtual });
  };

  totalItens = () => {
    return this.state.carrinho.reduce(
      (total, item) => total + item.quantidade,
      0
    );
  };

  limparCarrinho = () => {
    this.setState({ carrinho: [] });
  };

  /*****************************************************HOME*****************************************************/
  render() {
    //Renderização dos produtos na tela principal
    const exibirProdutos = this.state.produtos
      .filter(produto => {
        return produto.nome
          .toLowerCase()
          .includes(this.state.query.toLowerCase());
      })
      .filter(produto => {
        return (
          this.state.precoMinimo === "" ||
          produto.valor >= this.state.precoMinimo
        );
      })
      .filter(produto => {
        return (
          this.state.precoMaximo === "" ||
          produto.valor <= this.state.precoMaximo
        );
      })
      .sort((a, b) => {
        switch (this.state.sortingParameter) {
          case "crescente":
            return this.state.order * (a.valor - b.valor);
          case "decrescente":
            return this.state.order * (b.valor - a.valor);
          default:
        }
      })
      .map((produto) => {
        return (
          <div>
            <CardProduto
              key={produto.id}
              image={produto.image}
              nome={produto.nome}
              valor={produto.valor}
              adicionarProduto={() => this.adicionarProduto(produto.id)}
            />
          </div>
        );
      });

    //Retorno das telas
    if (this.state.pagina) {
      return (
        <div>
          <GlobalStyle />
          <Header
            paginaProdutos={this.state.pagina}
            paginaCarrinho={this.paginaCarrinho}
            totalItens={this.totalItens}
            query={this.state.query}
            onchangeQuery={this.onchangeQuery}
          />
          <div>
            <Filtro
              onchangePrecoMinimo={this.onchangePrecoMinimo}
              onchangePrecoMaximo={this.onchangePrecoMaximo}
              onchangeSortingParameter={this.onchangeSortingParameter}
              onchangeOrder={this.onchangeOrder}
              precoMinimo={this.state.precoMinimo}
              precoMaximo={this.state.precoMaximo}
              sortingParameter={this.state.sortingParameter}
              order={this.state.order}
            />
          </div>
          <TelaProdutos>{exibirProdutos}</TelaProdutos>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <GlobalStyle />
          <Header
            paginaProdutos={this.state.pagina}
            paginaCarrinho={this.paginaCarrinho}
          />
          <Carrinho
            carrinho={this.state.carrinho}
            removerProduto={this.removerProduto}
            adicionarQuantidade={this.adicionarQuantidade}
            diminuirQuantidade={this.diminuirQuantidade}
            limparCarrinho={this.limparCarrinho}
            paginaCarrinho={this.paginaCarrinho}
            totalItens={this.totalItens}
          />
          <Footer />
        </div>
      );
    }
  }
}
