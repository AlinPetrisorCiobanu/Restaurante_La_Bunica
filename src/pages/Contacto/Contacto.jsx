import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "../../common/Form/Form";
import restaurant from "../../img/backgrouund.jpg"
import "./Contacto.scss";

export const Contacto = () => {
  const msg = () => {
    alert("Gracias por mandar tu mensaje");
  };
  return (
    <Container className="d-flex justify-content-center Contact_Design">
      <Col>
        <Row>
          <Col className="text-center pb-5">
            <h2>Contacta con Nosotros</h2>
          </Col>
        </Row>
        <Row>
          <Col className="pt-5">
            <Form clickHandler={msg} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center pt-5">
          <Col xs={11} md={4}>
            <iframe
              className="iframeMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.470412493688!2d-3.6887692234878244!3d40.39842855675223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42263c21b81f9d%3A0xfbecf36f5701bff1!2sC.%20de%20Juan%20de%20Mariana%2C%2015%2C%2028045%20Madrid!5e0!3m2!1ses!2ses!4v1696237185430!5m2!1ses!2ses"
              loading="lazy"
            ></iframe>
          </Col>
          <Col xs={11} md={4}>
            <p>
            Gracias por apoyarnos y nos puede visitar cuando quieran los esperamos todos los días de Lunes a Domingo de 12:00 @ 00:00 con platos especiales y caseros.
            </p>
          </Col>
          <Col xs={11} md={4}>
          <img src={restaurant} alt="restaurante" />
          </Col>
        </Row>
      </Col>
    </Container>
  );
};
