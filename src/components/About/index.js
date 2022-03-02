import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./About.styles";

import MapP from "../../images/about1.svg";
import Mision from "../../images/about2.svg";
import Vision from "../../images/about3.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="acerca">
      <Content data-aos="fade-right">
        <Text>
          <h1>¿Quiénes somos?</h1>
          <p>
            Somos una empresa Tamaulipeca dedicada al desarrollo de proyectos de
            energía limpia mediante paneles solares.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={MapP} />
        </MapC>
      </Content>

      <Content data-aos="fade-right">
        <MapC className="dp" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
        <Text>
          <h1>Misión</h1>
          <p>
            Apoyar a la sustentabilidad del planeta, promoviendo las energías
            renovables, y conseguir que nuestros consumidores estén satisfechos
            por el cambio positivo que están generando en nuestro ecosistema.
          </p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>¿Por qué elegirnos?</h1>
          <p>-Siempre vas a necesitar energía eléctrica.</p>
          <p>-El sol siempre estará listo para ayudarte.</p>
          <p>-Es una Fuente de Energía inagotable.</p>
          <p>-Funcionamiento hasta por más de 25 años.</p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={Vision} />
        </MapC>
      </Content>
    </Wrapper>
  );
};

export default About;
