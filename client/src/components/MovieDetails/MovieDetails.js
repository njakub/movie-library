import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { searchByTitleYT } from "../../api/youtubeApi";
import { searchByIdIMDB } from "../../api/imdbApi";
import Spinner from "../common/Spinner/Spinner";
import RatingsComponent from "../RatingsComponent/RatingsComponent";
import MovieMetaData from "./MovieMetaData";

function MovieDetails({}) {
  const location = useLocation();
  const id = location?.state?.movieId;

  const {
    isLoading: movieLoading,
    error: movieError,
    data: movie,
  } = useQuery(["searchByIdIMDB", id], () => searchByIdIMDB(id), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const {
    isLoading: videoLoading,
    error: videoError,
    data: video,
  } = useQuery(
    ["searchByTitleYT", movie?.data?.title],
    () => searchByTitleYT(`${movie?.data?.title} trailer`),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  if (movieLoading) return <Spinner />;
  if (movieError) return <h2>Something went wrong...</h2>;

  console.log("movie", movie);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full h-64 sm:w-1/2 sm:h-96">
          {videoLoading ? (
            <Spinner />
          ) : (
            <iframe
              className="w-full h-full aspect-video"
              src={`https://www.youtube.com/embed/${video.data.items[0].id.videoId}`}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              title="video"
            />
          )}
        </div>
        <div class="flex flex-col w-full sm:w-1/2 sm:pl-5">
          <h1 className="mt-2 mb-1 text-2xl font-medium leading-tight sm:mt-0 sm:text-4xl text-slate-900">
            {movie.data.title}
          </h1>
          <MovieMetaData
            year={movie.data.year}
            runtime={movie.data.runtimeStr}
            genres={movie.data.genres}
            contentRating={movie.data.contentRating}
          />
          <RatingsComponent rating={movie.data.ratings} />
          <p className="mt-2">{movie.data.plot}</p>
        </div>
      </div>
      {/* <div>
        <img
          src={movie.data.image}
          alt="Poster"
          className="content-center mb-1 mr-5 rounded h-[42vh] w-[32vw]"
        />
      </div> */}
    </div>
  );
}

export default MovieDetails;
