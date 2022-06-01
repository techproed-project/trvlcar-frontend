import React, { useState } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const AdminVehicles = () => {
  const [loadingDownload, setLoadingDownload] = useState(false);
  const handleDownload = () => { 
    
   }

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="primary" as={Link} to="/admin/vehicles/new">New Vehicle</Button>
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
        title="Vehicles"
        
      />
    </div>
  );
};

export default AdminVehicles;
