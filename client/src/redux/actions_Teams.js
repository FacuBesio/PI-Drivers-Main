import { CLEAN_ALL_TEAMS, GET_ALL_TEAMS } from "./actionsType";
import axios from "axios";
const URL = "http://localhost:5000/teams";

//* GET_ALL_TEAMS
export const getAllTeams = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${URL}`);
      return dispatch({ type: GET_ALL_TEAMS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
