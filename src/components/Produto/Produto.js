import React from 'react';
import CardProduto from './CardProduto'
import FogueteSingle from './img/01_foguete_single.jpg'
import FogueteDoble from './img/02_foguete_doble.jpg'
import FogueteJunior from './img/03_foguete_junior.jpeg'
import FogueteBlaster from './img/04_foguete_blaster.jpg'
import NaveClassic from './img/05_nave_classic.png'
import NaveMegalodon from './img/06_nave_megalodon.jpg'
import OnibusPluto from './img/07_onibus_esp_pluto.png'
import OnibusNetuno from './img/08_onibus_esp_netuno.png'
import CapsulaMini from './img/09_capsula_mini.jpg'
import ComboFoguete from './img/10_combo_foguete.jpg'
import ComboOnibus from './img/11_combo_netuno.png'
import SuperComboVariado from './img/12_super_combo_variado.jpg'
import styled from 'styled-components';

const TelaProdutos = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat()(4, 1fr);
`

export default class Produto extends React.Component {
    state={
        produtos:[
            {
                id: 1,
                nome: "Foguete Single",
                valor: 48650.99,
                image: FogueteSingle,
            },
            {
                id: 2,
                nome: "Foguete Doble",
                valor: 65550.99,
                image: FogueteDoble,
            },
            {
                id: 3,
                nome: "Foguete Junior",
                valor: 75650.99,
                image: FogueteJunior,
            },
            {
                id: 4,
                nome: "Foguete Blaster",
                valor: 80650.99,
                image: FogueteBlaster,
            },
            {
                id: 5,
                nome: "Nave Classic",
                valor: 100000.00,
                image: NaveClassic,
            },
            {
                id: 6,
                nome: "Nave Megalodon",
                valor: 700000.00,
                image: NaveMegalodon,
            },
            {
                id: 7,
                nome: "Ônibus Espacial Pluto",
                valor: 200000.00,
                image: OnibusPluto,
            },
            {
                id: 8,
                nome: "Onibus Espacial Netuno",
                valor: 350000.00,
                image: OnibusNetuno,
            },
            {
                id: 9,
                nome: "Cápsula Mini",
                valor: 150000.00,
                image: CapsulaMini,
            },
            {
                id: 10,
                nome: "Combo de Foguetes",
                valor: 125000.00,
                image: ComboFoguete,
            },
            {
                id: 11,
                nome: "Combo Netuno",
                valor: 600000.00,
                image: ComboOnibus,
            },
            {
                id: 12,
                nome: "Super Combo Veicular",
                valor: 100500500.00,
                image: SuperComboVariado,
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
                   acrescentarProdutoCarrinho = {() => this.acrescentarProdutoCarrinho(produto.id)}
                />
            )
        })
        return(
            <TelaProdutos>
                { teste }
              </TelaProdutos> 
        )
    }
}