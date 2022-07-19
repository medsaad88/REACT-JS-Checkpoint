import { Form, Col } from "react-bootstrap";
function Register() {
  return (
    <>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Control placeholder="username" />
      </Form.Group>

      <Form.Group>
        <Form.Control placeholder="Adress" />
      </Form.Group>

      <Form.Group>
        <Form.Control placeholder="Birthday(day-month-years)" />
      </Form.Group>
    </>
  );
}

export default Register;