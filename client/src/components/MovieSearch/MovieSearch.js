import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { searchById, searchByTitle } from "../../api/omdbApi";
import MovieCard from "../MovieCard/MovieCard";
import MovieList from "../MovieList/MovieList";

function MovieSearch({}) {
  const { register, handleSubmit } = useForm();
  const [moviesResponse, setMoviesResponse] = useState([]);

  const onSubmit = async (data) => {
    const resp = await searchByTitle(data.title);
    const movieDetails = resp?.data?.Search.map(async (movie) => {
      return await searchById(movie.imdbID);
    });

    Promise.all(movieDetails).then((values) => {
      const moreThan100Likes = values.filter(
        (movie) => parseInt(movie?.data?.imdbVotes.replace(/,/g, ""), 10) > 100
      );
      const displayMovies = moreThan100Likes.map((movie) => movie.data);

      setMoviesResponse(displayMovies);
    });
  };

  return (
    <>
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/4">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="movie-search-name"
            >
              Movie Title:
            </label>
          </div>
          <div class="md:w-2/4">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="movie-search-name"
              type="text"
              {...register("title")}
            />
          </div>
          <div class="md:w-1/4 ml-4">
            <input
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              type="submit"
            />
          </div>
        </div>
      </form>
      <div className="flex flex-wrap justify-between">
        {/* {moviesResponse &&
          moviesResponse?.map((movie) => <MovieCard movie={movie} />)} */}
        {moviesResponse && <MovieList moviesResponse={moviesResponse} />}
      </div>
    </>
  );
}

export default MovieSearch;
