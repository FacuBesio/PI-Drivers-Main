import { GET_ALL_DRIVERS } from "./actionsType";
import axios from "axios";
const URL = "http://localhost:5000/drivers";

//? ORDERS
//* ORDER BY NAME
export const orderByName = (value, page) => {
  return async () => {
    try {
      const pageSize = 9;
      const { data } = await axios(
        page
          ? `${URL}?page=${page}&pageSize=${pageSize}`
          : `${URL}?pageSize=${pageSize}`
      );
      return dispatch({ type: GET_ALL_DRIVERS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
    allDrivers.sort(function (a, b) {
      const nameA = a.nombre.toUpperCase();
      const nameB = b.nombre.toUpperCase();
      let result = 0;
      if (nameA < nameB) {
        result = -1;
      }
      if (nameA > nameB) {
        result = 1;
      }
      value === "descendente" && (result = result * -1);
      return result;
    });
  };
};

//? FILTERS
