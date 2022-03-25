import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  Page,
  Men,
} from "./Examples.styles";
import Aos from "aos";
import "aos/dist/aos.css";

import work1 from "../../images/work1.jpeg";
import work2 from "../../images/work2.jpeg";
import work3 from "../../images/work3.jpeg";
import work4 from "../../images/work4.jpeg";
import work5 from "../../images/work5.jpeg";
import work6 from "../../images/work6.jpeg";
import work7 from "../../images/work7.jpeg";

const Examples = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content>
        <h1>Trabajos</h1>
        <p>Nos especializamos en instalación de paneles solares</p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={work1} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={work2} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={work3} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={work4} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={work5} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={work6} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={work7} />
          </CardHeader>
        </CardWrapper>
      </div>
    </Wrapper>
  );
};

export default Examples;
