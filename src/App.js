import React from 'react';
import styled from 'styled-components'
import { CardProduto } from './components/CardProduto';
import FogueteSingle from './img/foguete-single-01-130.jpg';


const MainContainer = styled.div`
  display: flex;
  align-items: center;
`

class App extends React.Component{
  state={
    produtos:[{
      id: 1,
      nome: "Foguete Single",
      valor: 10000.00,
      image: "https://picsum.photos/200/200",
    },
    {
      id: 2,
      nome: "Foguete Single",
      valor: 10000.00,
      image: "https://picsum.photos/200/201",
    }
  ]
  }
  render (){
    const teste=this.state.produtos.map((produto) =>{
      return(
        <CardProduto
          key={produto.id}  
          image={produto.image}
          nome={produto.nome}
          valor={produto.valor}
        />
      )
    })
    return (
      <MainContainer>{
        teste
        }
      </MainContainer>
    );
  } 
}


export default App;
