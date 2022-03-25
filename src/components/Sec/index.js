import React, { useEffect } from "react";
import { Container, Wrapper, Text, Message, LogoN } from "./Sec.styles";
import image from "../../images/banner.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const Section = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container imgUrl={image}>
        <Text>
          <h1>Nuestros trabajos</h1>
          <p>Una muestra de nuestros más recientes trabajos</p>
          <div className="dividerw"></div>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Section;
