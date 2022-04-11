import RatingsComponent from "../RatingsComponent/RatingsComponent.js";
import { searchById, searchByTitle, getByTitle } from "../../api/omdbApi";
import { useQuery } from "react-query";

function MovieCard({ movie }) {
  const { Title, Poster, Year, imdbID } = movie;

  const {
    isLoading,
    error,
    data: movieDetails,
  } = useQuery(["searchById", imdbID], () => searchById(imdbID), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  console.log("movieDetails", movieDetails);

  return (
    <div class="flex flex-col items-center py-4 bg-amber-500 w-80 mb-4 rounded-lg border border-gray-200 shadow-md hover:bg-amber-200">
      <h2 className="mb-1 font-bold text-center">{`${Title} (${Year})`}</h2>
      <img
        src={Poster}
        alt="Poster"
        class="rounded h-72 w-60 content-center mb-1"
      />
      {movieDetails?.data?.Ratings?.length && (
        <RatingsComponent ratings={movieDetails.data.Ratings} />
      )}
    </div>
  );
}

export default MovieCard;
