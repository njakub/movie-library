import React from "react";

function MovieMetaData({ year, runtime, contentRating, genres }) {
  return (
    <div class="flex mb-2">
      <div className="bg-gray-300 border border-gray-500 rounded-full ">
        {contentRating}
      </div>{" "}
      - {year} - {runtime} - {genres}
    </div>
  );
}

export default MovieMetaData;
