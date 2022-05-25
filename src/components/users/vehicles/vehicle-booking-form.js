import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  InputGroup,
  Button,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-maskedinput";
import SectionHeader from "../common/section-header/section-header";
import moment from "moment";
import { isVehicleAvailable } from "../../../api/reservation-service";

const VehicleBookingForm = ({ vehicle }) => {
  const [isCarAvailable, setIsCarAvailable] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const initialValues = {
    pickUpLocation: "",
    dropOfLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
    cardNo: "",
    nameOnCard: "",
    expireDate: "",
    cvc: "",
    contract: false,
  };

  const validationSchema = Yup.object({
    pickUpLocation: Yup.string().required("Enter a pick up place please."),
    dropOfLocation: Yup.string().required("Enter a drop off place please."),
    pickUpDate: Yup.string().required("Select a pick up date please."),
    pickUpTime: Yup.string().required("Select a pick up time please."),
    dropOffDate: Yup.string().required("Select a drop off date please."),
    dropOffTime: Yup.string().required("Select a drop off time please."),
    cardNo: Yup.string().required("Please enter the card number"),
    nameOnCard: Yup.string().required("Please enter the name of card"),
    expireDate: Yup.string().required("Please enter the expire date"),
    cvc: Yup.number()
      .typeError("Must be number")
      .required("Please enter the cvc"),
    contract: Yup.boolean().oneOf(
      [true],
      "Please read the contract and check the box"
    ),
  });

  const onSubmit = (values) => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const checkTheCarIsAvailable = async () => {
    const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = formik.values;

    if (!pickUpDate || !pickUpTime || !dropOffDate || !dropOffTime) return;

    const dto = {
      carId: vehicle.id,
      pickUpDateTime: moment(`${pickUpDate} ${pickUpTime}`).format("MM/DD/YYYY HH:mm:ss"),
      dropOffDateTime:moment(`${dropOffDate} ${dropOffTime}`).format("MM/DD/YYYY HH:mm:ss")
    }

    try {
      const resp = await isVehicleAvailable(dto);
      const { isAvailable, totalPrice } = resp.data;

      setIsCarAvailable(isAvailable);
      setTotalPrice(totalPrice);


    } catch (error) {
      console.log(error);
    }
    


  };

  return (
    <>
      <SectionHeader title="Booking Form" />
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Container>
          <Row>
            <Col md={isCarAvailable ? 6 : 12}>
              <FloatingLabel label="Pickup Location" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Pickup Location"
                  {...formik.getFieldProps("pickUpLocation")}
                  isInvalid={
                    formik.touched.pickUpLocation &&
                    formik.errors.pickUpLocation
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.pickUpLocation}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel label="Dropoff Location" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Dropoff Location"
                  {...formik.getFieldProps("dropOfLocation")}
                  isInvalid={
                    formik.touched.dropOfLocation &&
                    formik.errors.dropOfLocation
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.dropOfLocation}
                </Form.Control.Feedback>
              </FloatingLabel>

              <InputGroup className="mb-3">
                <FloatingLabel label="Pickup Date" className="flex-grow-1">
                  <Form.Control
                    type="date"
                    placeholder="Pickup Date"
                    {...formik.getFieldProps("pickUpDate")}
                    isInvalid={
                      formik.touched.pickUpDate && formik.errors.pickUpDate
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.pickUpDate}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label="Time">
                  <Form.Control
                    type="time"
                    placeholder="Pickup Time"
                    {...formik.getFieldProps("pickUpTime")}
                    isInvalid={
                      formik.touched.pickUpTime && formik.errors.pickUpTime
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.pickUpTime}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>

              <InputGroup className="mb-3">
                <FloatingLabel label="Dropoff Date" className="flex-grow-1">
                  <Form.Control
                    type="date"
                    placeholder="Dropoff Date"
                    {...formik.getFieldProps("dropOffDate")}
                    isInvalid={
                      formik.touched.dropOffDate && formik.errors.dropOffDate
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.dropOffDate}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label="Time">
                  <Form.Control
                    type="time"
                    placeholder="Dropoff Time"
                    {...formik.getFieldProps("dropOffTime")}
                    isInvalid={
                      formik.touched.dropOffTime && formik.errors.dropOffTime
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.dropOffTime}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col md={6} className={isCarAvailable ? "d-block" : "d-none"}>
              <FloatingLabel label="Card Number" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Card Number"
                  as={MaskedInput}
                  mask="1111-1111-1111-1111"
                  {...formik.getFieldProps("cardNo")}
                  isInvalid={formik.touched.cardNo && formik.errors.cardNo}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.cardNo}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel label="Name on Card" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name on Card"
                  {...formik.getFieldProps("nameOnCard")}
                  isInvalid={
                    formik.touched.nameOnCard && formik.errors.nameOnCard
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.nameOnCard}
                </Form.Control.Feedback>
              </FloatingLabel>

              <InputGroup className="mb-3">
                <FloatingLabel label="Expire Date" className="flex-grow-1">
                  <Form.Control
                    type="text"
                    placeholder="Expire Date"
                    as={MaskedInput}
                    mask="11/11"
                    {...formik.getFieldProps("expireDate")}
                    isInvalid={
                      formik.touched.expireDate && formik.errors.expireDate
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.expireDate}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label="CVC" className="flex-grow-1">
                  <Form.Control
                    type="text"
                    placeholder="CVC"
                    as={MaskedInput}
                    mask="111"
                    {...formik.getFieldProps("cvc")}
                    isInvalid={formik.touched.cvc && formik.errors.cvc}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.cvc}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>

              <Form.Check
                type="checkbox"
                label="I have read and aggree the sales contract"
                id="contract"
                {...formik.getFieldProps("contract")}
                isInvalid={formik.touched.contract && formik.errors.contract}
              />
            </Col>
            <Col className="text-center">
              <Button variant="primary" size="lg" type="submit" className={isCarAvailable ? "d-block" : "d-none"}>
                Book Now
              </Button>

              <Button
                variant="secondary"
                size="lg"
                type="button"
                onClick={checkTheCarIsAvailable}
                className={isCarAvailable ? "d-none" : "d-block"}
              >
                Check Avaliabilty
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default VehicleBookingForm;
