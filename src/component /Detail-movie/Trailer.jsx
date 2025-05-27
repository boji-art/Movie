export const Trailer = ({ movie }) => {
  console.log({ movie });
  return (
    <div className="flex ">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        className="md:h-[428px]  md:w-[290px] "
      />
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="md:h-[428px] md:[760px]"
        />
      </div>
    </div>
  );
};
