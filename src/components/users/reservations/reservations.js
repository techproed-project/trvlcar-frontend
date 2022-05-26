import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { getReservations } from "../../../api/reservation-service";

const Reservations = () => {
    const [loading, setLoading] = useState(true);
    const [reservations, setReservations] = useState([]);

    useEffect( async () => {
        try{
            const resp = await getReservations();
            setReservations(resp.data);
        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }, []);
    

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Car</th>
            <th>Pick up</th>
            <th>Drop off</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Reservations;
