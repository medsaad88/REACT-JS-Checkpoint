import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginImg from "./smoke.jpg";
import Login from "./components/Login";
import Register from "./components/Register";
import { Row, Col, Form, Image, Button, Container } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
    };
  }
  showLoginForm = () => {
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false,
    });
  };
  showRegisterForm = () => {
    this.setState({
      isLoginOpen: false,
      isRegisterOpen: true,
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col
            lg={12}
            md={12}
            sm={12}
            className=" p-5 d-flex justify-content-center"
          >
            <div className="login-box p-5">
              <Image
                src={LoginImg}
                style={{
                  width: "88px",
                  height: "88px",
                  border: "1px solid green",
                }}
                roundedCircle
              />
              <Form className="mt-4">
                {this.state.isLoginOpen ? <Login /> : <Register />}
                <Button
                  className="btn-block"
                  id="login-btn"
                  variant="success"
                  onClick={this.showLoginForm}
                >
                  Login
                </Button>
                or
                <Button
                  className="btn-block"
                  variant="info"
                  onClick={this.showRegisterForm}
                >
                  Register
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;