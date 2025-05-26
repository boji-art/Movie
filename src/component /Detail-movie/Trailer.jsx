export const Trailer = ({ movie }) => {
  return (
    <div className="">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        className="h-[246px]  md:h-[600px] w-full "
      />
    
    {/* <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster}`}
        className="h-[148px]"
      />
    </div> */}
    </div>
  );
  
};
