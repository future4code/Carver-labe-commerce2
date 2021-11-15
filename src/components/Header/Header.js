import React from "react";
import styled from "styled-components";
import Carrinho from "../../icones/shopping_cart_black_24dp.svg";
import Usuario from "../../icones/user.svg";
import Pesquisa from "../../icones/search_black_24dp.svg";

const HeaderContainer = styled.div`
  background-color: #f0a500;
  padding: 0.5%;
  padding-right: 3%;
  padding-bottom: 0.5%;
  padding-left: 2%;
  text-align: left;
  position: sticky;
  top: 0;
  color: #082032;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  h4,
  p,
  img {
    :hover {
      cursor: pointer;
    }
  }

  span {
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-envely;
  }
`;
const MinhaConta = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 20%;
    margin-right: 0.2rem;
  }

  @media (max-width: 800px) {
    img {
      width: 80%;
    }
    h4 {
      display: none;
    }
  }
`;
const TotalItens = styled.p`
  position: absolute;
  top: 16px;
  right: 2rem;
  background-color: #ff671c;
  border-radius: 100%;
  color: #ffffff;
  font-weight: 100;
  font-size: 14px;
  width: 16px;
  height: 16px;
  text-align: center;

  @media (max-width: 800px) {
    right: 0.16rem;
    top: 10px;

    width: 20px;
    heidht: 20px;
  }
`;
const BuscarItens = styled.div`
  input {
    width: 30rem;
    height: 2rem;
    border-radius: 20px;
    background-color: #ffffff;
    border: none;
    padding: 0 2rem;
  }

  img {
    position: relative;
    right: 30px;
    top: 6px;
    width: 4%;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const BuscarMobile = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: inline;
    input {
      width: 19.4rem;
      height: 2rem;
      background-color: #ffffff;
      border: none;
      padding: 0 2rem;
    }
  }
`;

export default class Header extends React.Component {
  render() {
    if (this.props.paginaProdutos) {
      return (
        <div>
          <HeaderContainer>
            <p>
              <em>
                <span>AstroRockets</span> - To the moon and back
              </em>
            </p>
            <BuscarItens>
              <input
                placeholder="Busca por nome"
                value={this.props.query}
                onChange={this.props.onchangeQuery}
              />
              <img src={Pesquisa} alt="Ícone de pesquisa" />
            </BuscarItens>

            <div>
              <TotalItens>{this.props.totalItens()}</TotalItens>
              <img
                src={Carrinho}
                onClick={this.props.paginaCarrinho}
                alt="Carrinho de compras"
              />
            </div>
          </HeaderContainer>
          <BuscarMobile>
            <input
              placeholder="Busca por nome"
              value={this.props.query}
              onChange={this.props.onchangeQuery}
            />
          </BuscarMobile>
        </div>
      );
    } else {
      return (
        <HeaderContainer>
          <p onClick={this.props.paginaCarrinho}>
            <em>
              <span>AstroRockets</span> - To the moon and back
            </em>
          </p>
          <BuscarItens>
            <input
              placeholder="Busca por nome"
              value={this.props.query}
              onChange={this.props.onchangeQuery}
            />
            <img src={Pesquisa} alt="Ícone de pesquisa" />
          </BuscarItens>
          <MinhaConta>
            <img src={Usuario} alt="Botao para entrar na conta do usuário" />
            <h4>Minha Conta</h4>
          </MinhaConta>
        </HeaderContainer>
      );
    }
  }
}
