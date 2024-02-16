import axios from "axios";
import { CLEAN_DRIVER_DETAIL, GET_ALL_DRIVERS, GET_DRIVER_DETAIL, SEARCH_DRIVER } from "./actionsType";
const URL = "http://localhost:5000/api/drivers";

//?CARDS
//* CLEAN_DRIVER_DETAIL
// export const cleanDetail = () => {
//   return { type: CLEAN_DETAIL };
// };

//* GET_ALL_DRIVERS
export const getAllDrivers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${URL}`);
      return dispatch({ type: GET_ALL_DRIVERS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//* GET_DRIVER_DETAIL
// export const getCharacterDetail = (id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios(
//         `http://localhost:3001/rickandmorty/character/${id}`
//       );
//       return dispatch({ type: GET_CHARACTER_DETAIL, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

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

