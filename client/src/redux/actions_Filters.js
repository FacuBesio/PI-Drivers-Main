import { FILTER_STATUS, SET_ORDERS } from "./actionsType";

//? ORDERS
//* SET_ORDERS
export const setOrders = (orders) => {
  return (dispatch) => {
    return dispatch({ type: SET_ORDERS, payload: orders });
  };
};

//? FILTERS
export const filterStatus = (value) => {
  return { type: FILTER_STATUS, payload: value };
};
