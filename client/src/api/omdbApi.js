import axios from "axios";

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

export { searchById, searchByTitle };
