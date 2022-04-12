import axios from "axios";

async function searchMovieByTitleIMDB(term) {
  return axios
    .get(
      `https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_IMDB_KEY}/?title=${term}&title_type=feature,documentary,short`
    )
    .then(function (response) {
      // handle success
      console.log(response);
      if (response.data.errorMessage) {
        throw response.data.errorMessage;
      }
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

async function searchByIdIMDB(id) {
  return axios
    .get(
      `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_IMDB_KEY}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`
    )
    .then(function (response) {
      // handle success
      console.log(response);
      if (response.data.errorMessage) {
        throw response.data.errorMessage;
      }
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export { searchMovieByTitleIMDB, searchByIdIMDB };
