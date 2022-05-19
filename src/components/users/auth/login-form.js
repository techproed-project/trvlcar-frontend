import React from "react";
import { Button, Form } from "react-bootstrap";

const LoginForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button variant="primary">Login</Button>
    </Form>
  );
};

export default LoginForm;
