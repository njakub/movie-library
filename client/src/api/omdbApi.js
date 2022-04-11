import axios from "axios";
import { useQuery } from "react-query";

async function searchByTitle(term, page = 1) {
  return axios
    .get(`http://www.omdbapi.com/?apikey=c84d0fbc&s=${term}&page=${page}`)
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

async function getByTitle(term, page = 1) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=c84d0fbc&s=${term}&page=${page}`
  );
  return response.json();
}

fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) =>
  res.json()
);

async function searchById(id) {
  return axios
    .get(`http://www.omdbapi.com/?apikey=c84d0fbc&i=${id}`)
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

export { searchById, searchByTitle, getByTitle };
