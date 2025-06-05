import { ArrowRight, Star } from "lucide-react";

import { useRouter } from "next/router";

export const SearchResultCart = ({ movie, setSearchValue }) => {
  const router = useRouter();
 

  const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original/${movie?.backdrop_path}`;
  const handleSeeMore = () => {
    setSearchValue("");
    router.push(`/details/${movie.id}`);
  };
  return (
    <div className="flex overflow-hidden w-[537px] gap-4 p-2">
      <img
        src={imgUrl}
      className="w-[67px] h-[100px] object-cover"></img>

      <div className="flex flex-col w-full gap-3">
        <p>{movie?.title}</p>
        <p className="flex items-center text-sm">
            <Star />
            <span className="font-semibold"> {movie?.vote_average.toFixed(1)}</span>
            <span className="ml-1 text-gray-500">/10</span>
          </p>
          <div className="flex justify-between w-full">
            <p>{movie?.release_date}</p>
        <div onClick={handleSeeMore} className="flex gap-2 cursor-pointer">
              See more
              <ArrowRight />
            </div>
      </div>
      </div>
    </div>
  );
};
