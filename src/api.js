const { REACT_APP_RapidAPI_Key } = process.env;

export const GeoDbApi = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": REACT_APP_RapidAPI_Key,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
