import imdbLogo from "../../assets/imdb.png";
import metacritic from "../../assets/metacritic.png";
import rottenTomatoesLogo from "../../assets/rotten.png";

function RatingsComponent({ ratings }) {
  function logoSelector(name) {
    if (name === "Internet Movie Database") {
      return imdbLogo;
    } else if (name === "Rotten Tomatoes") {
      return rottenTomatoesLogo;
    } else if (name === "Metacritic") {
      return metacritic;
    }
  }
  return (
    <div class="flex">
      {ratings?.map((rating) => {
        return (
          <div class="flex px-2">
            <img
              class="h-6 w-8 px-1"
              src={logoSelector(rating.Source)}
              alt={rating.Source}
            />
            {rating.Value}
          </div>
        );
      })}
    </div>
  );
}

export default RatingsComponent;
