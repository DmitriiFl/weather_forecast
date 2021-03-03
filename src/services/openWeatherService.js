import axios from "axios";

export const getCityWeather = async (city) => {
  const appId = "7e5fa846ad285bc10f4916311a521180";

  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appId}&units=metric`
    )
    .then((response) => {
      return response.data.list.map((item) => ({
        name: item.dt_txt,
        temperature: item.main.temp,
      }));
    })
    .catch((err) => Promise.reject(err));
};
