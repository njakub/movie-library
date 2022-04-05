import RatingsComponent from "../RatingsComponent/RatingsComponent.js";

function MovieCard({ movie }) {
  const { Title, Poster, Year, Ratings } = movie;
  return (
    <div class="flex flex-col items-center py-4 bg-amber-500 w-80 mb-4 rounded-lg border border-gray-200 shadow-md hover:bg-amber-200">
      <h2 className="mb-1 font-bold text-center">{`${Title} (${Year})`}</h2>
      <img
        src={Poster}
        alt="Poster"
        class="rounded h-72 w-60 content-center mb-1"
      />
      {Ratings && <RatingsComponent ratings={Ratings} />}
    </div>
  );
}

export default MovieCard;
