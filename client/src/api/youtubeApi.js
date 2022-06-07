import axios from "axios";

async function searchByTitleYT(term, page = 1) {
  return axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_YOUTUBE_KEY}&type=video&q=${term}`
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

export { searchByTitleYT };
