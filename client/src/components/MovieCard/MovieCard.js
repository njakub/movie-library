function MovieCard({ movie }) {
  const { Title, Plot, Poster } = movie;
  return (
    <div class="p-1 bg-zinc-100 border rounded max-w-sm">
      <h2>{Title}</h2>
      <img src={Poster} alt="Poster" class="rounded max-w-sm h-48 w-48" />
      {Plot}
    </div>
  );
}

export default MovieCard;
