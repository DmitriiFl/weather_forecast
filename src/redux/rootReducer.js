import { SET_CITY, SET_WEATHER, SET_ERROR, REMOVE_ERROR } from "./actions";

const initialState = {
  city: "",
  weather: [],
  error: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.city };
    case SET_WEATHER:
      return { ...state, weather: action.weather };
    case SET_ERROR:
      return { ...state, error: action.error };
    case REMOVE_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};
