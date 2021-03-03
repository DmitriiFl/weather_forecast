export const SET_CITY = "SET_CITY";
export const SET_WEATHER = "SET_WEATHER";
export const SET_ERROR = "SET_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";

export const editCity = (city) => {
  return { type: SET_CITY, city };
};
export const setWeather = (weather) => {
  return { type: SET_WEATHER, weather };
};
export const setError = (error) => {
  return { type: SET_ERROR, error };
};
export const removeError = () => {
  return { type: REMOVE_ERROR };
};
