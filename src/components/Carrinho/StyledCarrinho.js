import styled from 'styled-components';

const PaginaCarrinho = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    min-height: 37.125rem
`
const CardCompra = styled.div `
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 5px gray;
    margin: 1rem;
    padding: 1rem;
    
    img:first-child {
        width: 25%
    }
`
const DescricaoProduto = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    h2 {
        font-weight: 600;
    }
`
const BotaoDeletar = styled.img `
    width: 5%
`
const AreaQuantidade = styled.div ` 
    display: flex
`

const CarrinhoVazio = styled.div `
    min-height: 36.45rem
`
export { PaginaCarrinho, CardCompra, DescricaoProduto, BotaoDeletar, AreaQuantidade, CarrinhoVazio }