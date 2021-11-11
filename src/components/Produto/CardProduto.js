import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
`
const ProductImage = styled.img`
	margin: 5px;
	padding: 5px;
	width: 150px;
`

export default function CardProduto(props) {
	return (
		<ProductContainer>
			<ProductImage alt={'Foto do produto'} src={props.image} />
			<p>{props.nome}</p>
            <p>{props.valor}</p>
            <button>Adicionar ao Carrinho</button>
		</ProductContainer>
	)
}