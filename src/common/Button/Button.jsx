import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./Button.scss";

export const Button = ({name , clickHandler}) => {
  return (
    <Container className="Button_Design">
      <Col>
        <button className="custom_button" onClick={() => clickHandler()}>
          {name}
        </button>
      </Col>
    </Container>
  );
};
