import imdbLogo from "../../assets/imdb.png";
import metacriticLogo from "../../assets/metacritic.png";
import rottenTomatoesLogo from "../../assets/rotten.png";

function RatingsComponent({ rating }) {
  return (
    <div class="flex">
      {rating?.imDb && (
        <div class="flex pr-2">
          <img class="h-6 w-8 " src={imdbLogo} alt="IMDB" />
          {rating?.imDb}
        </div>
      )}
      {rating?.rottenTomatoes && (
        <div class="flex px-2">
          <img class="h-6 w-8 px-1" src={rottenTomatoesLogo} alt="RT" />
          {`${rating?.rottenTomatoes}%`}
        </div>
      )}
      {rating?.metacritic && (
        <div class="flex px-2">
          <img class="h-6 w-8 px-1" src={metacriticLogo} alt="MT" />
          {rating?.metacritic}
        </div>
      )}
    </div>
  );
}

export default RatingsComponent;
