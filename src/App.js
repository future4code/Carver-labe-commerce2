import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Produto from './components/Produto/Produto';
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
  display: flex;
  align-items: center;
`

function App () {
    return (
      <div>
        <GlobalStyle />
        <Header/>
        <MainContainer>
          <Produto />
        </MainContainer>
        <Footer/>
      </div>
    );
  
}

export default App;