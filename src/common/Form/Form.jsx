import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Input } from "../Input/Input";
import "./Form.scss";
import { Button } from "../Button/Button";

export const Form = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Col xs={12} md={8}>
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col xs={12} md={6}>
            <Input />Nombre
          </Col>
          <Col xs={12} md={6}>
            <Input />Apellidos
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col xs={12} md={6}>
            <Input />Email
          </Col>
          <Col xs={12} md={6}>
            <Input />Phone
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col xs={12} md={8}>
            <Input />Comentario:
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center align-items-center text-center">
            <Col xs={12}>
                <Button />
            </Col>
        </Row>
      </Col>
    </Container>
  );
};
