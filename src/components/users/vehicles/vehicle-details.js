import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./vehicle-details.css";

const VehicleDetails = ({ vehicle }) => {
  const {
    id,
    image,
    pricePerHour,
    model,
    fuelType,
    airConditioning,
    doors,
    luggage,
  } = vehicle;

  console.log(vehicle);

  const imageSrc = `${process.env.REACT_APP_API_URL}/files/display/${image[0]}`;

  return (
    <Container className="vehicle-details">
      <Row>
        <Col md={6}>
            <img src={imageSrc} className="img-fluid" alt={model}/>
            <div className="price">
                ${pricePerHour} <span> per hour</span>
            </div>
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  );
};

export default VehicleDetails;
