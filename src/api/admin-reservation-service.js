import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getReservations = () => {
  return axios.get(`${API_URL}/reservations/admin/all`, { headers: authHeader() });
};


const downloadReservations = () => {
  return axios.get(`${API_URL}/excel/download/reservations`, {
    headers: {
      ...authHeader(),
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    responseType: 'blob'
  });
};




export { getReservations, downloadReservations };
