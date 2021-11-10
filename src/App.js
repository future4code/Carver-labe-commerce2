import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Produto from './components/Produto/Produto';
import FogueteSingle from './img/foguete-single-01-130.jpg';

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
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
        <MainContainer>
          <Produto />
        </MainContainer>
      </div>
    );
  
}

export default App;