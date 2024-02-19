import {
  CLEAN_DRIVERS,
  CLEAN_DRIVER_DETAIL,
  CLEAN_ALL_DRIVERS,
  GET_ALL_DRIVERS,
  GET_DRIVER_DETAIL,
  GET_DRIVERS_BY_QUERY_NAME,
  SEARCH_DRIVER,
} from "./actionsType";
import { ADD_FAV, FILTER_FAV, ORDER_FAV, REMOVE_FAV } from "./actionsType";
import { BACK_PAGE, NEXT_PAGE, SET_PAGE, SET_TOTAL_PAGES } from "./actionsType";

const inicialState = {
  allDrivers: [],
  driverDetail: {},
  drivers: [],
  myFavorites: [],
  page: "",
  totalPages: "",
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case CLEAN_DRIVERS:
      return {
        ...state,
        drivers: [],
      };

    case CLEAN_DRIVER_DETAIL:
      return {
        ...state,
        driverDetail: {},
      };

    case CLEAN_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: [],
        totalPages: "",
      };

    case GET_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: [...action.payload.drivers],
        totalPages: action.payload.totalPages,
      };

    case GET_DRIVER_DETAIL:
      return {
        ...state,
        driverDetail: action.payload,
      };

    case GET_DRIVERS_BY_QUERY_NAME:
      return {
        ...state,
        allDrivers: [...action.payload.drivers],
        totalPages: action.payload.totalPages,
      };

    case SEARCH_DRIVER:
      return {
        ...state,
        drivers: [...action.payload],
      };

    case BACK_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case NEXT_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

      case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
