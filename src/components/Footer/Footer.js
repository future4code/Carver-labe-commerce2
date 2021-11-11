import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
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

export default class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <p>Siga a nossas redes sociais!</p>
            </FooterContainer>
        )
    }
}