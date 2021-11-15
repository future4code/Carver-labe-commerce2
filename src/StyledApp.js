import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      font-family: 'Franklin Gothic Medium', sans-serif;
      color: #082032;
    }
`;

const LayoutHome = styled.div`
  display: grid;
  grid-template-columns: 12% 88%;

  @media (max-width: 800px) {
    min-width: 320px;
    display: flex;
    flex-direction: column;
  }
`;

const TelaProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  min-height: 33.05rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    margin-left: 1rem;
  }
`;

const Promocao = styled.div`
  border-top: 2px solid #ffffff;
  background-color: #27536b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 5%;
    margin-right: 20px;
  }
  p {
    color: #ffffff;
    font-size: 8px;
  }

  p:first-child {
    font-size: 16px;
  }

  @media (max-width: 800px) {
    height: 8rem;
    width: 104.8%;
    flex-direction: column;
    img {
      width: 20%;
    }
    p:first-child {
      font-size: 14px;
    }
  }
`;
const Ordenacao = styled.div`
  margin: 6px 36px 0px;
  display: flex;
  justify-content: flex-end;

  label {
    margin: 5px;
  }

  select {
    height: 30px;
    padding: 4px 8px;
    border: 1px solid #cecece;
    border-radius: 4px;
  }

  @media (max-width: 800px) {
    margin: 0px 10px;
  }
`;

export { GlobalStyle, Promocao, LayoutHome, Ordenacao, TelaProdutos };
