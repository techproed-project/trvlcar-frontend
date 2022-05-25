import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const isVehicleAvailable = (dto) => {
  const { carId, pickUpDateTime, dropOffDateTime } = dto;
  return axios.get(`${API_URL}/reservations/auth?carId=${carId}&pickUpDateTime=${pickUpDateTime}&dropOffDateTime=${dropOffDateTime}`);
};

export { isVehicleAvailable };
