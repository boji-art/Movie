export const Trailer = ({ movie }) => {
  console.log(`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        className="h-[246px]  md:h-[600px] w-full "
      />
    </div>
  );
};
