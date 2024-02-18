import { BACK_PAGE, NEXT_PAGE, SET_PAGE } from "./actionsType";

//* SET_PAGE
export const setPage = (page) => {
  return (dispatch) => {
    return dispatch({ type: SET_PAGE, payload: page });
  };
};

//* NEXT_PAGE
export const nextPage = (page) => {
  return (dispatch) => {
    const newPage = Number(page) + 1;
    return dispatch({ type: NEXT_PAGE, payload: newPage.toString() });
  };
};

//* BACK_PAGE
export const backPage = (page) => {
  if (page > 1) {
    return (dispatch) => {
      const newPage = Number(page) - 1;
      return dispatch({ type: BACK_PAGE, payload: newPage.toString() });
    };
  } else {
    return dispatch({ type: BACK_PAGE, payload: page });
  }
};
