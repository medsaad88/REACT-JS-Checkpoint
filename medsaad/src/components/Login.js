import { Form } from "react-bootstrap";
function Login() {
  return (
    <>
      <Form.Group>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="float-left">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <a href="#" className="ml-3">
        Forget Password ?
      </a>
    </>
  );
}

export default Login;