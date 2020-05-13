import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'

const Login = ({ type }) => {
  return (
    <div
      style={
        { 
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex'
        }
      }
    >
      <Row className="loginContainer">
        <Col md="6" style={ { margin: 0, padding: 0 }} className="loginImage">
          <img src="https://picsum.photos/500" alt="loginImage" style={ { maxWidth: '100%' }}/>
        </Col>
        
        <Col md="6" className="loginForm">
          <Form style={{ width: "100%" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email or username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ width: "100%", marginBottom: "10px" }}>
              Submit
            </Button>
            { type === " " ? <p>Don't have account? <a href="/register">Register here</a></p> : <p>Have an account? <a href="/register">Login here</a></p>}
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
