import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import "./Form.scss";

export const Form = ({clickHandler}) => {
  return (
      <form action="#" className="d-flex justify-content-center align-items-center">
        <Col xs={12} md={8}>
          <Row className="d-flex justify-content-center align-items-center text-center">
            <Col xs={12} md={6}>
              <Input type={"text"} name={"name"} date={"Nombre"} />
            </Col>
            <Col xs={12} md={6}>
              <Input type={"text"} name={"last_name"} date={"Apellidos"} />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center text-center">
            <Col xs={12} md={6}>
              <Input type={"email"} name={"email"} date={"Email"} />
            </Col>
            <Col xs={12} md={6}>
              <Input type={"tel"} name={""} date={"Phone"} />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center text-center">
            <Col xs={12} md={8}>
              <Input type={"text"} name={"text"} date={"Comentario"} />
            </Col>
          </Row>
          <hr />
          <Row className="d-flex justify-content-center align-items-center text-center">
            <Col xs={12}>
              <Button name={"Enviar"} clickHandler={clickHandler} />
            </Col>
          </Row>
        </Col>
      </form>
  );
};
