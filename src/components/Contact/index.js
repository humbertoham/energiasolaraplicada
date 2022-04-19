import React from "react";
import { Container, Text, Wrapper, Con } from "./Contact.styles";
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Text>
          <h1>Contáctanos</h1>
        </Text>
        <Con className="ptp">
          <h1>
            <FontAwesomeIcon className="email" size="2x" icon={faEnvelope} />
            Emails: contacto@energiasolaraplicada.net
          </h1>
          <h1>ventas@energiasolaraplicada.net</h1>
          <h1>soportetecnico@energiasolaraplicada.net</h1>
        </Con>
        <Con>
          <h1>
            <FontAwesomeIcon className="whats" size="2x" icon={faWhatsapp} />{" "}
            Matamoros 868-828-7819
          </h1>
        </Con>
        <Con>
          <h1>
            <FontAwesomeIcon className="whats" size="2x" icon={faWhatsapp} />{" "}
            Reynosa 899-872-0808
          </h1>
        </Con>
        <Con className="pt">
          <h1>
            <FontAwesomeIcon className="pin" size="2x" icon={faMapMarkerAlt} />{" "}
            Ubicación: Calle 12 Número 3 entre Teran y Zaragoza Zona Centro
            Matamoros, Tamaulipas.
          </h1>
        </Con>
      </Container>
    </Wrapper>
  );
};

export default Contact;
