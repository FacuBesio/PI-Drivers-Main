import {
  CLEAN_DRIVERS,
  CLEAN_DRIVER_DETAIL,
  CLEAN_ALL_DRIVERS,
  GET_ALL_DRIVERS,
  GET_DRIVER_DETAIL,
  GET_DRIVERS_BY_QUERY_NAME,
  GET_DRIVER_BY_ID,
  NOT_FOUND,
} from "./actionsType";
import axios from "axios";
const URL_API = "http://localhost:5000/api/drivers";
const URL = "http://localhost:5000/drivers";

//?CARDS
//* CLEAN_DRIVERS
export const cleanDrivers = () => {
  return { type: CLEAN_DRIVERS };
};

//* CLEAN_DRIVER_DETAIL
export const cleanDriverDetail = () => {
  return { type: CLEAN_DRIVER_DETAIL };
};

//* CLEAN_ALL_DRIVERS
export const cleanAllDrivers = () => {
  return { type: CLEAN_ALL_DRIVERS };
};

//* GET_ALL_DRIVERS
export const getAllDrivers = (page, orders, filters) => {
  const { orderNombre, orderNacimiento } = orders;
  const { filterTeams, filterDrivers } = filters;
  
  return async (dispatch) => {
    const pageSize = 9;
    try {
      const { data } = await axios(
        page
          ? `${URL}?page=${page}&pageSize=${pageSize}&orderNombre=${orderNombre}&orderNacimiento=${orderNacimiento}&filterDrivers=${filterDrivers}&filterTeams=${filterTeams}`
          : `${URL}?pageSize=${pageSize}&orderNombre=${orderNombre}&orderNacimiento=${orderNacimiento}&filterDrivers=${filterDrivers}&filterTeams=${filterTeams}`
      );
      return dispatch({ type: GET_ALL_DRIVERS, payload: data });
    } catch (error) {
      if ((error.message = "Request failed with status code 404")) {
        console.log("error.message: ", error.message);
        return dispatch({ type: NOT_FOUND, payload: error.message });
      } else {
        console.log(error.message);
      }
    }
  };
};

//* GET_DRIVERS_BY_QUERY_NAME
export const getDriversByQueryName = (nameQuery, page, orders, filters) => {
  const { orderNombre, orderNacimiento } = orders;
  const { filterTeams, filterDrivers } = filters;
  return async (dispatch) => {
    const pageSize = 9;
    try {
      const { data } = await axios(
        page
          ? `${URL}?name=${nameQuery}&page=${page}&pageSize=${pageSize}&orderNombre=${orderNombre}&orderNacimiento=${orderNacimiento}&filterDrivers=${filterDrivers}&filterTeams=${filterTeams}`
          : `${URL}?name=${nameQuery}&pageSize=${pageSize}&orderNombre=${orderNombre}&orderNacimiento=${orderNacimiento}&filterDrivers=${filterDrivers}&filterTeams=${filterTeams}`
      );
      return dispatch({ type: GET_DRIVERS_BY_QUERY_NAME, payload: data });
    } catch (error) {
      if ((error.message = "Request failed with status code 404")) {
        console.log("error.message: ", error.message);
        return dispatch({ type: NOT_FOUND, payload: error.message });
      } else {
        console.log(error.message);
      }
    }
  };
};

//* GET_DRIVER_BY_ID
export const getDriverById = (id) => {
  return async (dispatch) => {
    try {
      if (!id) return alert("Ingresa un Id");
      const { data } = await axios.get(`${URL}/${id}`);
      return dispatch({ type: GET_DRIVER_BY_ID, payload: data });
    } catch (error) {
      if ((error.message = "Request failed with status code 404")) {
        console.log("error.message: ", error.message);
        return dispatch({ type: NOT_FOUND, payload: error.message });
      } else {
        console.log(error.message);
      }
    }
  };
};

//* GET_DRIVER_DETAIL
export const getDriverDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${URL}/${id}`);
      if (data[0]) {
        const dataObj = data[0];
        return dispatch({ type: GET_DRIVER_DETAIL, payload: dataObj });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

//* CREATE_DRIVER
export const createDriver = async (driver) => {
  try {
    const { data } = await axios.post(`${URL}`, driver);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
