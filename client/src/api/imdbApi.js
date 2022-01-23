import axios from "axios";

async function getMovieByTitle(title) {
  return axios
    .get("http://www.omdbapi.com/?apikey=c84d0fbc&t=Pulp+Fiction")
    .then(function (response) {
      // handle success
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

async function searchByTitle(term) {
  return axios
    .get(`http://www.omdbapi.com/?apikey=c84d0fbc&s=${term}`)
    .then(function (response) {
      // handle success
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export { getMovieByTitle, searchByTitle };
