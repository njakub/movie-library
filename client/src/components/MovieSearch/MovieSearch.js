import React, { useState, useEffect } from "react";
import { useForm, watch } from "react-hook-form";
import { searchById, searchByTitle, getByTitle } from "../../api/omdbApi";
import MovieCard from "../MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import isNull from "lodash/isNull";

function MovieSearch({}) {
  const { register, handleSubmit } = useForm();
  const [moviesResponse, setMoviesResponse] = useState();
  const [searchedTitle, setSearchedTitle] = useState();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const {
    isLoading,
    error,
    data: byTitleResponse,
  } = useQuery(
    ["movieSearch", searchedTitle, page],
    () => searchByTitle(searchedTitle, page),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  const onSubmit = async (data) => {
    setSearchedTitle(data.title);
  };

  useEffect(() => {
    console.log("byTitleResponse", byTitleResponse);
    if (!isNull(byTitleResponse)) {
      setMoviesResponse(byTitleResponse?.data);
      setPageCount(byTitleResponse?.data.totalResults / 10);
    }
  }, [byTitleResponse]);

  // if (isLoading) return <h3>Loading...</h3>;
  // if (error) return <h3>{error.toString()}</h3>;
  const handlePageClick = (data) => {
    setPage(data.selected + 1);
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
        {moviesResponse?.Search?.length &&
          moviesResponse.Search.map((movie) => <MovieCard movie={movie} />)}
        {/* {moviesResponse && <MovieList moviesResponse={moviesResponse} />} */}
        <ReactPaginate pageCount={pageCount} onPageChange={handlePageClick} />
      </div>
    </>
  );
}

export default MovieSearch;
