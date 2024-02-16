import {
  CLEAN_DRIVER_DETAIL,
  GET_ALL_DRIVERS,
  GET_DRIVER_DETAIL,
  SEARCH_DRIVER,
} from "./actionsType";
import { ADD_FAV, FILTER_FAV, ORDER_FAV, REMOVE_FAV } from "./actionsType";

const inicialState = {
  drivers: [],
  myFavorites: [],
  allDrivers: [],
  driverDetail: {},
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: [action.payload, ...state.allDrivers]
      };

    default:
      return { ...state };
  }
};

export default reducer;
