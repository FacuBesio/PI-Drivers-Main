import axios from "axios";
import { ADD_FAV, FILTER_FAV, ORDER_FAV, REMOVE_FAV } from "./actionsType";
const URL = "http://localhost:3001/rickandmorty/character/";

// ? FAVORITES
//* ADD_FAV
// export const addFav = (character) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav";
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(endpoint, character);
//       return dispatch({
//         type: ADD_FAV,
//         payload: data,
//       });
//     } catch (error) {
//       console.log(`addFav Error: ${error.message}`);
//     }
//   };
// };

//* FILTER_FAV
// export const filterCards = (gender) => {
//   return {
//     type: FILTER_CARDS,
//     payload: gender,
//   };
// };

// //* ORDER_FAV
// export const orderCards = (order) => {
//   return {
//     type: ORDER_CARDS,
//     payload: order,
//   };
// };

//* REMOVE_FAV
// export const removeFav = (id) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.delete(endpoint);
//       return dispatch({
//         type: REMOVE_FAV,
//         payload: data,
//       });
//     } catch (error) {
//       console.log(`addFav Error: ${error.message}`);
//     }
//   };
// };





