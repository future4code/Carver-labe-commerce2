import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    background: rgb(255, 238, 0);
    padding-top: 0.5%;
    padding-right: 3%;
    padding-bottom: 0.5%;
    padding-left: 0.5%;
    text-align: left;
    position: sticky;
    top: 0;
    color: rgb(11, 12, 59);
    font-weight: bold;
`
export default class Header extends React.Component {

    render() {
        return (
            <HeaderContainer>
                <p><em> <span>AstroRockets</span> - To the moon and back</em></p>
                <h4>Carrinho</h4>
            </HeaderContainer>
        )
    }
}