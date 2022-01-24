function MovieCard({ movie }) {
  const { Title, Poster, Year } = movie;
  return (
    <div class="flex flex-col items-center py-4 bg-amber-500 border rounded w-80 mb-4">
      <h2 className="font-bold mb-1">{`${Title} (${Year})`}</h2>
      <img
        src={Poster}
        alt="Poster"
        class="rounded h-72 w-60 content-center mb-1"
      />
    </div>
  );
}

export default MovieCard;
