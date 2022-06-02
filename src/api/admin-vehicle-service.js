import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const createVehicle = (imageId, vehicle) => {
  return axios.post(`${API_URL}/car/admin/${imageId}/add`, vehicle, { headers: authHeader() });
};

const uploadVehicleImage = (image) => {
  return axios.post(`${API_URL}/files/upload`, image, {
    headers: {
      ...authHeader(),
      "Content-Type":
        "multipart/form-data",
    }
  });
};

const downloadVehicles = () => {
  return axios.get(`${API_URL}/excel/download/cars`, {
    headers: {
      ...authHeader(),
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    responseType: 'blob'
  });
};




export {  createVehicle, downloadVehicles, uploadVehicleImage };
