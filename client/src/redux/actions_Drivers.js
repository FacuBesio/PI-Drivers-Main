import axios from "axios";
import {
  CLEAN_DRIVER_DETAIL,
  GET_ALL_DRIVERS,
  GET_DRIVER_DETAIL,
  SEARCH_DRIVER,
} from "./actionsType";
const URL_API = "http://localhost:5000/api/drivers";
const URL = "http://localhost:5000/drivers";

//?CARDS
//* CLEAN_DRIVER_DETAIL
// export const cleanDetail = () => {
//   return { type: CLEAN_DETAIL };
// };

//* GET_ALL_DRIVERS
export const getAllDrivers = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        page ? `${URL_API}?page=${page}` : `${URL_API}`
      );
      return dispatch({ type: GET_ALL_DRIVERS, payload: data });
    } catch (error) {
      console.log(error.message);
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

//* SEARCH_DRIVER
// export const onSearch = (id, characters) => {
//   return async (dispatch) => {
//     try {
//       if (!id) return alert("Ingresa un Id");
//       if (id > 826)
//         return alert(
//           `No existe un personaje con el Id: ${id}. Puedes elegir un personaje desde 1 al 826.`
//         );
//       if (characters.find((char) => char.id == id)) {
//         return alert(`Ya existe un personaje con el Id: ${id}`);
//       }
//       const { data } = await axios.get(`${URL}${id}`);
//       // console.log("test");
//       return dispatch({ type: SEARCH_CHARACTER, payload: data });
//     } catch (error) {
//       console.log(`action Error: ${error.message}`);
//     }
//   };
// };
