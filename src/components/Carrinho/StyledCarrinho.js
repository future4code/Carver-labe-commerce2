import styled from "styled-components";

const PaginaCarrinho = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin: 2rem 0.2rem 0f;
  }
`;
const CardCompra = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px #a3a3a3;
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

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const DescricaoProduto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0.4rem 0;

  h2 {
    font-weight: 600;
  }
`;
const IdentificaProduto = styled.div`
  display: flex;

  img {
    margin-right: 3rem;
  }
`;
const TextoProduto = styled.p`
  font-size: 12px;
  margin-top: 8px;
`;
const BotaoDeletar = styled.img`
  width: 4%;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 800px) {
    width: 6%;
  }
`;
const AreaQuantidade = styled.div`
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
`;
const ResumoCompra = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 26rem;
  min-height: 28rem;
  padding-top: 0.5rem;
  margin: 1rem 0;

  button {
    margin: 0.5rem 0 1rem 3rem;
    padding: 1rem;
    width: 20rem;
    border: 1px solid #f0c244;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
  }

  button:first-child {
    background-color: #f0c244;
    margin-bottom: 0;
  }

  @media (max-width: 800px) {
    width: 100%;
    border-radius: 0;

    button {
      margin: 0.5rem 1rem 1rem 1.5rem;
    }
  }
`;
const ItensResumoCompra = styled.div`
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

  @media (max-width: 800px) {
    width: 92%;
  }
`;
const TextoResumoCompra = styled.div`
  padding: 0.5rem 2.5rem;
  background-color: #e2e2e2;
  margin-bottom: 0.5rem;

  p:first-child {
    margin-bottom: 0.2rem;
  }
`;

const CarrinhoVazio = styled.div`
  min-height: 34.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;

  img {
    position: relative;
    left: 2rem;
    opacity: 0.5;
  }

  h2 {
    position: relative;
    left: 1rem;
    margin-bottom: 1.2rem;
    opacity: 0.5;
  }

  button {
    padding: 1rem;
    width: 16rem;
    border: 1px solid #f0c244;
    border-radius: 5px;
    background-color: #ffffff;
    color: #f0c244;
    cursor: pointer;
  }
`;

const BotaoLimpar = styled.button`
  padding: 1rem;
  width: 10rem;
  border: 1px solid #f0c244;
  border-radius: 5px;
  background-color: #ffffff;
  color: #f0c244;
  cursor: pointer;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    margin-left: 20px;
  }
`;
export {
  PaginaCarrinho,
  CardCompra,
  DescricaoProduto,
  IdentificaProduto,
  TextoProduto,
  BotaoDeletar,
  AreaQuantidade,
  ResumoCompra,
  ItensResumoCompra,
  TextoResumoCompra,
  CarrinhoVazio,
  BotaoLimpar,
};
