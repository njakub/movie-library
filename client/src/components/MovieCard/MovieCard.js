import RatingsComponent from "../RatingsComponent/RatingsComponent.js";
import { searchById, searchByTitle, getByTitle } from "../../api/omdbApi";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const { title, description, imDbRating, image, metacriticRating, id } = movie;
  let navigate = useNavigate();
  const handleClickView = () =>
    navigate(`/movieDetails`, { state: { movieId: id } });
  // const {
  //   isLoading,
  //   error,
  //   data: movieDetails,
  // } = useQuery(["searchById", imdbID], () => searchById(imdbID), {
  //   staleTime: Infinity,
  //   cacheTime: Infinity,
  // });

  return (
    <div class="flex flex-col items-center py-2 bg-amber-500 w-80 mb-4 rounded-lg border border-gray-200 shadow-md hover:bg-amber-200">
      <h2 className="mb-1 font-bold text-center">{`${title} ${description}`}</h2>
      <img
        src={image}
        alt="Poster"
        class="rounded h-72 w-60 content-center mb-1"
      />
      {imDbRating && (
        <div className="mt-2">
          <RatingsComponent
            rating={{ imDb: imDbRating, metacritic: metacriticRating }}
          />
        </div>
      )}
      <button
        onClick={handleClickView}
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-2"
      >
        View
      </button>
    </div>
  );
}

export default MovieCard;
