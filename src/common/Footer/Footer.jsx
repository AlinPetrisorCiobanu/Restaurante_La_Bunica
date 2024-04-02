import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center text-center Footer_Design"
      >
        <Col>
          <Row>
            <Col className="text-center pb-2 pt-2" xs={12} md={4}>
              <a href="#">@Términos y Condiciones</a>
            </Col>
            <Col className="text-center pb-2 pt-2" xs={12} md={4}>
              <a href="#">@Derecho de Autor</a>
            </Col>
            <Col className="text-center pb-2 pt-2" xs={12} md={4}>
              <a href="#">@Copyright</a>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};
