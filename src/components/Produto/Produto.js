import React from 'react';
import CardProduto from './CardProduto'

export class Produto extends React.Component {
    state={
        produtos:[
            {
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
    render() {
        const teste = this.state.produtos.map((produto) => {
            return(
              <CardProduto
                key={produto.id}  
                image={produto.image}
                nome={produto.nome}
                valor={produto.valor}
              />
            )
          });
        return (
            <div>
                {teste}
            </div>
        )
    }
}