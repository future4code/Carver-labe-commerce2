import styled from 'styled-components';

const PaginaCarrinho = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
    min-height: 34.55rem;

`
const CardCompra = styled.div `
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 5px gray;
    border-radius: 5px;
    margin: 1rem 0;
    padding: 1rem;
    height: 8rem;
    width: 30rem;  
    
    img:first-child {
        width: 5rem;
    }

    hr {
        border-style: none;
        border-top-style: solid;
        border-color: #ebebeb;
        border-width: 1px;
    }
`

const DescricaoProduto = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.4rem 0;

    h2 {
        font-weight: 600;
    }
`
const IdentificaProduto = styled.div ` 
    display: flex;
    
    img {
        margin-right: 3rem;
    }
`
const BotaoDeletar = styled.img `
    width: 4%;
    position: relative;
    bottom: 40px;   
`
const AreaQuantidade = styled.div ` 
    display: flex;

    span {
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        padding: 0.4rem 1rem;
        font-size: 14px;
    }

    button {
        margin: 0.3rem;
        height: 1.5rem;
        width: 1.5rem;
        border: 1px solid #a3a3a3;
        border-radius: 100%;
        background-color: #ffffff;
        text-align: center;
    }
`
const ResumoCompra = styled.div `
    background-color: #f5f5f5;
    border-radius: 10px;
    width: 26rem;
    height: 28rem;
    padding-top: 0.5rem;
    margin: 1rem 0;

    button {
        margin: 0.5rem 0 0 3rem;
        padding: 1rem;
        width: 20rem;
        border: 1px solid #72caf4;
        border-radius: 5px;
        background-color: #f5f5f5;
        color: #72caf4;
        cursor:pointer;
    }
`
const ItensResumoCompra = styled.div `
    border-bottom: 1px solid #ebebeb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24rem;
    margin: 1rem;
    padding-bottom: 1rem;

    h2 {
        font-size: 1.2rem;
        font-weight: 600;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
    }
`
const TextoResumoCompra = styled.div `
    padding: 0.5rem 2.5rem;
    background-color: #e2e2e2;
    margin-bottom: 0.5rem;
    
    p:first-child {
        margin-bottom: 0.2rem;
    }
`

const CarrinhoVazio = styled.div `
    min-height: 36.56rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor:default;

    img {
        position: relative;
        left: 2rem
    }

    h2 {
        position: relative;
        left: 3rem;
        margin-bottom: 1.2rem;
        opacity: 0.5
    }

    button {
        padding: 1rem;
        width: 16rem;
        border: 1px solid #72caf4;
        border-radius: 5px;
        background-color: #ffffff;
        color: #72caf4;
        cursor:pointer;
    }
`

const BotaoLimpar = styled.button `
        padding: 1rem;
        width: 10rem;
        border: 1px solid #72caf4;
        border-radius: 5px;
        background-color: #ffffff;
        color: #72caf4;
        cursor:pointer;
`
export { PaginaCarrinho, CardCompra, DescricaoProduto, IdentificaProduto, BotaoDeletar, AreaQuantidade, ResumoCompra, ItensResumoCompra, TextoResumoCompra, CarrinhoVazio, BotaoLimpar }