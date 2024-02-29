import {
  CLEAN_DRIVERS,
  CLEAN_DRIVER_DETAIL,
  CLEAN_ALL_DRIVERS,
  GET_ALL_DRIVERS,
  GET_DRIVER_DETAIL,
  GET_DRIVERS_BY_QUERY_NAME,
  GET_DRIVER_BY_ID,
} from "./actionsType";
import { GET_ALL_TEAMS } from "./actionsType";
import {
  BACK_PAGE,
  NEXT_PAGE,
  HOME_CLEANER,
  SET_PAGE,
  SET_TOTAL_PAGES,
} from "./actionsType";
import { FILTER_STATUS, SET_ORDERS } from "./actionsType";
import { CLEAN_ERRORS, NOT_FOUND } from "./actionsType";

const orderInitialState = {
  orderNombre: "",
  orderNacimiento: "",
};

const inicialState = {
  allDrivers: [],
  allTeams: [],
  driverDetail: {},
  drivers: [],
  myFavorites: [],
  page: "",
  totalPages: "",
  orders:{...orderInitialState},
  filterStatus: false,
  homeCleaner: false,
  notValue_error: false,
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    //? HOME
    case HOME_CLEANER:
      return {
        ...state,
        homeCleaner: action.payload,
      };

    //? DRIVERS
    case CLEAN_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: [],
        totalPages: "",
        notFound_error: "",
      };

    case CLEAN_DRIVERS:
      return {
        ...state,
        drivers: [],
        notFound_error: "",
      };

    case CLEAN_DRIVER_DETAIL:
      return {
        ...state,
        driverDetail: {},
      };

    case GET_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: [...action.payload.drivers],
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };

    case GET_DRIVERS_BY_QUERY_NAME:
      return {
        ...state,
        allDrivers: [...action.payload.drivers],
        totalPages: action.payload.totalPages,
      };

    case GET_DRIVER_BY_ID:
      return {
        ...state,
        drivers: [...action.payload],
      };

    case GET_DRIVER_DETAIL:
      return {
        ...state,
        driverDetail: action.payload,
      };

    //? TEAMS
    case GET_ALL_TEAMS:
      return {
        ...state,
        allTeams: [...action.payload],
      };

    //? PAGES
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

    //? ORDERS & FILTERS
    case FILTER_STATUS:
      return {
        ...state,
        filterStatus: action.payload,
      };

      case SET_ORDERS:
      return {
        ...state,
        orders: {...action.payload},
      };

    //? ERRORS
    case CLEAN_ERRORS:
      return {
        ...state,
        notFound_error: "",
      };

    case NOT_FOUND:
      return {
        ...state,
        notFound_error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
