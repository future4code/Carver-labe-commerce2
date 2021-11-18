import React from "react";
import {
  GlobalStyle,
  Promocao,
  LayoutHome,
  Ordenacao,
  TelaProdutos,
} from "./StyledApp";
import { produtos } from "./components/Produto/Produto";
import Carrinho from "./components/Carrinho/Carrinho";
import CardProduto from "./components/Produto/CardProduto";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filtro from "./components/Filtro/Filtro";

import Astronauta from "./icones/astronaut.png";

export default class App extends React.Component {
  state = {
    carrinho: [],
    produtos: produtos,
    pagina: true,
    query: "",
    precoMinimo: "",
    precoMaximo: Infinity,
    sortingParameter: "crescente",
    order: 1,
  };

  /***********************************************LOCAL STORAGE***********************************************/
  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
  }

  componentDidMount() {
    const modificarCarrinho = localStorage.getItem("carrinho");
    if (modificarCarrinho) {
      this.setState({ carrinho: JSON.parse(modificarCarrinho) });
    }
  }

  /*************************************************FILTROS*************************************************/
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

    if (event.target.value !== "") {
      this.setState({
        precoMaximo: event.target.value,
      })
    }else{
      this.setState({
        precoMaximo: Infinity
    })
    /*;
    if (event.target.value === "") {
      this.precoMaximo.value = Infinity
      
    }*/

  }};
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

  limparFiltro = () => {
    this.setState({
      precoMinimo: "",
      precoMaximo: Infinity,
    });
  };

  /*************************************************CARRINHO*************************************************/
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

  mensagemPromocao = () => {
    return alert(`REGULAMENTO: 
    - Apenas para clientes cadastrados.`)
  }

  /*************************************************HOME*************************************************/
  render() {
    //Renderização dos produtos na tela principal
    const exibirProdutos = this.state.produtos
      .filter((produto) => {
        return produto.nome
          .toLowerCase()
          .includes(this.state.query.toLowerCase());
      })
      .filter((produto) => {
        return (
          Number(this.state.precoMinimo) === "" ||
          produto.valor >= Number(this.state.precoMinimo)
        );
      })
      .filter((produto) => {
        return (
          Number(this.state.precoMaximo) === "" ||
          produto.valor <= Number(this.state.precoMaximo)
        );
      })
      .sort((a, b) => {
        switch (this.state.sortingParameter) {
          case "crescente":
            return this.state.order * (a.valor - b.valor);
          case "decrescente":
            return this.state.order * (b.valor - a.valor);
          default:
            return " ";
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
          <Promocao onClick={() => this.mensagemPromocao()}>
            <img src={Astronauta} alt="Astronauta" />
            <div>
              <p>
                {" "}
                NAS COMPRAS ACIMA DE 100.00 ASTROLETAS LEVE UM TRAJE ESPECIAL.
              </p>
              <p>*Consulte no regulamento.</p>
            </div>
          </Promocao>
          <LayoutHome>
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
                limparFiltro={this.limparFiltro}
              />
            </div>
            <div>
              <Ordenacao>
                <label for="order">Ordenar:</label>
                <select
                  name="order"
                  value={this.state.order}
                  onChange={this.onchangeOrder}
                >
                  <option value=" ">Populares</option>
                  <option value={1}>Preço - Crescente</option>
                  <option value={-1}>Preço - Decrescente</option>
                </select>
              </Ordenacao>
              <TelaProdutos>{exibirProdutos}</TelaProdutos>
            </div>
          </LayoutHome>
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
