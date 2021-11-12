import styled from 'styled-components';

const PaginaCarrinho = styled.div `
    display: flex;
    justify-content: space-between;
`
const CardCompra = styled.div `
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 5px gray;
    margin: 1rem;
    padding: 1rem;

    img {
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

    button {
        height: 5%
    }
`
const AreaQuantidade = styled.div ` 
    display: flex
`

const CarrinhoVazio = styled.div `
`
export { PaginaCarrinho, CardCompra, DescricaoProduto, AreaQuantidade, CarrinhoVazio }