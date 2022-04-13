import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

import { searchByIdIMDB } from "../../api/imdbApi";
import Spinner from "../common/Spinner/Spinner";

function MovieDetails({}) {
  const location = useLocation();
  const id = location?.state?.movieId;

  const {
    isLoading,
    error,
    data: movie,
  } = useQuery(["searchByIdIMDB", id], () => searchByIdIMDB(id), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  if (isLoading) return <Spinner />;
  if (error) return <h2>Something went wrong...</h2>;

  return (
    <div>
      <div class="">
        <h1>{movie.data.fullTitle}</h1>
        {/* <div class="aspect-w-16 aspect-h-9">
          <iframe
            src={movie.data.trailer.linkEmbed}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="video"
            width="640"
            height="360"
          />
        </div> */}
        <div class="">
          {/* <iframe
            src={`${movie.data.trailer.linkEmbed}?autoplay=false&width=640`}
            width="640"
            height="360"
            frameborder="0"
            allow="fullscreen; picture-in-picture"
            allowfullscreen
            title="video"
          ></iframe> */}
        </div>
      </div>
      <p>{movie.data.plot}</p>
    </div>
  );
}

export default MovieDetails;
