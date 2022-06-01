import React, { useState } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const AdminReservations = () => {
  const [loadingDownload, setLoadingDownload] = useState(false);
  const handleDownload = () => { 
    
   }

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="primary" as={Link} to="/admin/reservations/new">New Reservation</Button>
        <Button
          variant="secondary"
          onClick={handleDownload}
          disabled={loadingDownload}
        >
          {loadingDownload && <Spinner animation="border" size="sm" />}
          Download List
        </Button>
      </ButtonGroup>

      <DataTable
        title="Reservations"
        
      />
    </div>
  );
};

export default AdminReservations;
