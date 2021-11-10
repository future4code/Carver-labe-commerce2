import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
`
const ProductImage = styled.img`
	margin-right: 5px;
`

export function CardProduto(props) {
	return (
		<ProductContainer>
			<ProductImage alt={'Foto do produto'} src={props.image} />
			<p>{props.nome}</p>
            <p>{props.valor}</p>
            <button>Clique aqui</button>
		</ProductContainer>
	)
}