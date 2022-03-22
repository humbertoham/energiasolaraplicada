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
} from "./Work.styles";
import Aos from "aos";
import "aos/dist/aos.css";

import image from "../../images/image001.png";
import image2 from "../../images/image002.png";
import image3 from "../../images/image003.png";
import image4 from "../../images/image004.jpg";
import image5 from "../../images/image005.png";

const MenuSec = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content>
        <h1>Servicios</h1>
        <p>Estos son nuestros kits </p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Kit 1</CardHeading>
            <Page src={image} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Kit solar para interconexión de 3 KW de potencia, 220 Vca con
                inversor de cadena y paneles policristalinos.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Kit 2</CardHeading>
            <Page src={image2} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Kit solar para interconexión de 5 KW de potencia, 220 Vca con
                inversor cadena y paneles policristalinos.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Kit 3</CardHeading>
            <Page src={image3} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Kit Solar para interconexión de 5.5 kW de Potencia, 220 Vca con
                Micro Inversores y Paneles Policristalinos
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Kit 4</CardHeading>
            <Page src={image4} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Kit de energía solar para refrigerador de 220 L de aplicaciones
                aisladas de la red eléctrica, para lugares en donde no hay red
                eléctrica, por ejemplo un rancho. Este kit incluye el sistema
                completo así como el refrigerador para una operación 24h365.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Kit 5</CardHeading>
            <Page src={image5} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Kit de Energía Solar Para Refrigerador de 105 L e Iluminación
                Led de Alta Eficiencia Para Aplicaciones Aisladas de la Red
                Eléctrica, ideal para una pequeña vivienda que no cuenta con
                acceso a la red eléctrica, en este caso el sistema puede
                alimentar 1 refrigerador y 5 lámparas led, el Kit incluye el
                refrigerador, 5 lámparas led y la infraestructura para la puesta
                en marcha.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
    </Wrapper>
  );
};

export default MenuSec;
