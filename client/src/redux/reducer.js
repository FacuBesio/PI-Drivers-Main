import {
  CLEAN_DRIVER_DETAIL,
  GET_ALL_DRIVERS,
  GET_DRIVER_DETAIL,
  SEARCH_DRIVER,
} from "./actionsType";
import { ADD_FAV, FILTER_FAV, ORDER_FAV, REMOVE_FAV } from "./actionsType";
import { BACK_PAGE, NEXT_PAGE, SET_PAGE } from "./actionsType";

const inicialState = {
  allDrivers: [],
  driverDetail: {},
  drivers: [],
  myFavorites: [],
  page: "",
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: [...action.payload],
      };

    case GET_DRIVER_DETAIL:
      return {
        ...state,
        driverDetail: action.payload,
      };

    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case NEXT_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case BACK_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
