import axios from "axios";

async function createUser(user) {
  return axios
    .post("http://localhost:5000/api/users", user)
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

export { createUser };
