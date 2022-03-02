import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.0970005167746!2d-97.5104690851402!3d25.86628468358945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f94bea04a5719%3A0xc1fd07e52f8184c9!2sC.%20Doce%203%2C%20Zona%20Centro%2C%2087300%20Heroica%20Matamoros%2C%20Tamps.!5e0!3m2!1sen!2smx!4v1646177393043!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;
