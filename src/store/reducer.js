import * as actionTypes from "./actions";

const initialState = {
  city: "",
  weather: [],
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CITY:
      return { ...state, city: action.city };
    case actionTypes.SET_WEATHER:
      return { ...state, weather: action.weather };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.error };
    case actionTypes.REMOVE_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};
