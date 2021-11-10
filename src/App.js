import React from 'react';
import { GlobalStyle } from './StyledApp'

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      }

    ]
  }

  render() {

    const productList = this.state.produtos.map((item) =>{
      return {...item}
    });
    
    return (
      <div> 
        <GlobalStyle />
        {productList}
      </div>
    )
  }
}  

export default App;