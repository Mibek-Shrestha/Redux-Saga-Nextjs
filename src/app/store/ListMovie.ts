import axios from "axios";
export const fetchMovieList = () => {
  return async () => {
    console.log("fetchMovieList");
    try {
      const options = {
        method: "GET",
        url: "https://streaming-availability.p.rapidapi.com/countries",
        headers: {
          "X-RapidAPI-Key":
            "d5c6106836msh6822e6052f07305p1b2c9fjsne31c32b16073",
          "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      console.log(response.data);
      return Promise.resolve(response);
    } catch (err) {
      return Promise.reject(err);
    }
  };
};
