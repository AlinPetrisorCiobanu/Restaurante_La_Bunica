import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Input.scss";

export const Input = ({
  name,
  type,
  date,
}) => {
  return (
    <>
      <InputGroup className="custom_input">
        <Form.Control
          type={type}
          placeholder={date}
          name={name}
          maxLength={50}
        />
      </InputGroup>
    </>
  );
};
