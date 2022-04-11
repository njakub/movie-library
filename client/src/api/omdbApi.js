import axios from "axios";
import { useQuery } from "react-query";

async function searchByTitle(term, page = 1) {
  return axios
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${term}&page=${page}`
    )
    .then(function (response) {
      // handle success
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

async function searchById(id) {
  return axios
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${id}`
    )
    .then(function (response) {
      // handle success
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export { searchById, searchByTitle };
