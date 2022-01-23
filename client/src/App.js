import React, { useState, useEffect } from "react";
import { getMovieByTitle, searchByTitle } from "./api/imdbApi";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      // You can await here
      searchByTitle("Pulp Fiction");
      const movieResp = await getMovieByTitle();
      console.log("movieResp", movieResp);
      setMovie(movieResp);
      // ...
    }
    fetchData();
  }, []);

  const movies = [
    {
      title: "Pulp Fiction",
      desc: "Descripition of pulp fiction, bla bla bla",
    },
  ];
  return (
    <div className="App">
      <MovieCard movie={movie} />
    </div>
  );
}

export default App;
