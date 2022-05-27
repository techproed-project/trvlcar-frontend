import React, { useEffect, useState } from "react";
import { getUsers } from "../../../api/admin-user-service";
import DataTable from "react-data-table-component";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const loadData = async () => {
    try {
      const resp = await getUsers();
      setUsers(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true
    },
    {
      name: "Roles",
      selector: (row) => row.roles,
      sortable: true
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={users} pagination/>
    </div>
  );
};

export default AdminUsers;
