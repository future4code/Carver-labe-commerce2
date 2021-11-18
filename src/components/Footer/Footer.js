import React from "react";
import styled from "styled-components";
import IconPrimeiraRede from "./img/alien_icon.jpg";
import IconSegundaRede from "./img/icon_cartoon.jpg";
import IconTerceiraRede from "./img/iconcartoon2.jpg";

const FooterContainer = styled.div`
  background: #f0a500;
  padding-top: 0.5%;
  padding-right: 3%;
  padding-bottom: 0.5%;
  padding-left: 0.5%;
  text-align: center;
  position: sticky;
  top: 0;
  color: #082032;
  font-weight: bold;
  align-items: center;

  h4,
  p,
  img {
    :hover {
      cursor: pointer;
    }
  }
  img {
    width: 3%;
    margin-right: 0.2rem;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <p>
          Siga as nossas redes sociais! -----{" "}
          <a
            href="http://weavesilk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀
          </a>{" "}
          <a
            href="https://findtheinvisiblecow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            👽
          </a>{" "}
          <a
            href="http://www.foddy.net/Athletics.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ☣️
          </a>
        </p>
      </FooterContainer>
    );
  }
}
