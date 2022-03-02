import React from "react";
import { Content, Wrapper, Red } from "./Foot.styles";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Foot = () => (
  <Wrapper>
    <Content>
      <Red href="https://www.facebook.com/Energia-Solar-Aplicada-105509521969664">
        <FontAwesomeIcon icon={faFacebookF} />
      </Red>
      <p>© Copyright 2022 Energía Solar Aplicada</p>
    </Content>
  </Wrapper>
);

export default Foot;
