import React from "react";
import styled from "styled-components";
import Carrinho from "../../icones/shopping_cart_black_24dp.svg";
import Usuario from "../../icones/user.svg";

const HeaderContainer = styled.div`
    background-color: #F0A500;
    padding-top: 0.5%;
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
    margin-bottom: ;

    h4, p, img {
        :hover {
            cursor: pointer;
        }
    }
`
const MinhaConta = styled.div `
    display:flex;
    align-items: center;
    img {
        width: 20%;
        margin-right: 0.2rem;
    }
`
const TotalItens = styled.p `
    position: absolute;
    top: 1px;
    right: 2rem;
    background-color: #ff671c;
    border-radius: 100%;
    color: #ffffff;
    font-weight: 100;
    font-size: 14px;
    width: 16px;
    height: 16px;
    text-align: center;
`

export default class Header extends React.Component {

    render() {
        if(this.props.paginaProdutos) {
            return (
                <HeaderContainer>
                    <p><em>AstroRockets - To the moon and back</em></p>
                    <input
                        placeholder="Busca por nome"
                        value={this.props.query}
                        onChange={this.props.onchangeQuery}
                    />
                    <div>
                        <TotalItens>{this.props.totalItens()}</TotalItens>
                        <img src={ Carrinho } onClick={this.props.paginaCarrinho} alt="Carrinho de compras"/>
                    </div>
                </HeaderContainer>
            )
        } else {
            return (
                <HeaderContainer>
                    <p onClick={this.props.paginaCarrinho}><em>AstroRockets - To the moon and back</em></p>
                    <input
                        placeholder="Busca por nome"
                        value={this.props.query}
                        onChange={this.props.onchangeQuery}
                    />
                    <MinhaConta>
                        <img src={Usuario} alt="Botao para entrar na conta do usuário" />
                        <h4>Minha Conta</h4>
                    </MinhaConta>
                </HeaderContainer>
            )    
        }
        
    }
}