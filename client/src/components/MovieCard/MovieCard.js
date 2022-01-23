function MovieCard({ movie }) {
  const { Title, Plot, Poster } = movie;
  return (
    <div>
      <h2>{Title}</h2>
      <img src={Poster} alt="Girl in a jacket" width="300" height="300" />
      {Plot}
    </div>
  );
}

export default MovieCard;
