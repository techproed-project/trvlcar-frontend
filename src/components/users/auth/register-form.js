import React from "react";
import { Button, Form } from "react-bootstrap";
import Spacer from "../common/spacer/spacer";
import * as Yup from "yup";
import MaskedInput from "react-maskedinput";
const RegisterForm = () => {

  const initialValues = {
    firstName:"",
    lastName:"",
    phoneNumber:"",
    address:"",
    zipCode:"",
    email:"",
    password:"",
    confirmPassword:""
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    phoneNumber: Yup.string().required("Please enter your phone number"),
    address: Yup.string().required("Please enter your address"),
    zipCode: Yup.string().required("Please enter your zip code"),
    password: Yup.string().required("Please enter your password")
    .min(8, "Must be at least 8 characters")
    .matches(/[a-z]+/,"One lowercase character")
    .matches(/[A-Z]+/,"One uppercase character")
    .matches(/[@$!%*#?&]+/,"One special character")
    .matches(/\d+/,"One number"),
    confirmPassword: Yup.string().required("Please re-enter your password")
    .oneOf([Yup.ref("password")],"Password fields doesn't match")
  }); 

  const onSubmit = (values) => {

  }

  



  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" as={MaskedInput} 
        mask="(111) 111-1111" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

        <Spacer height={20}/>
        <hr/>
        <Spacer height={20}/>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password Confirm</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button variant="primary">Register</Button>
    </Form>
  );
};

export default RegisterForm;
