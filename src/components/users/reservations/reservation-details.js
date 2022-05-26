import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Image, Row, Table } from "react-bootstrap";
import { getReservation } from "../../../api/reservation-service";

const ReservationDetails = ({ reservationId }) => {
  const [reservation, setReservation] = useState({});
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const resp = await getReservation(reservationId);
      setReservation(resp.data);
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (Object.keys(reservation).length > 0)
    return (
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="text-center">{reservation.car.model}</h2>
            <Image
              src={`${process.env.REACT_APP_API_URL}/files/display/${reservation.car.image[0]}`}
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Reservation Details</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th colSpan={2}>
                            <h3>${reservation.totalPrice}</h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Pick up Location</th>
                        <td>{reservation.pickUpLocation}</td>
                      </tr>
                      <tr>
                        <th>Drop off Location</th>
                        <td>{reservation.dropOfLocation}</td>
                      </tr>
                      <tr>
                        <th>Pick up Time</th>
                        <td>{reservation.pickUpTime}</td>
                      </tr>
                      <tr>
                        <th>Drop off Time</th>
                        <td>{reservation.dropOfTime}</td>
                      </tr>
                      <tr>
                        <th>Status</th>
                        <td>{reservation.status}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Car Details</Accordion.Header>
                <Accordion.Body>
                    
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
};

export default ReservationDetails;
