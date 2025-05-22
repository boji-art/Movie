import { ArrowRight } from "lucide-react";
import { Moviecart } from "./Moviecart";
import { useEffect, useState } from "react";
import { getTopRatedMovies } from "@/utils/getTopRatedMovies";

export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const getTopRated = async () => {
      const response = await getTopRatedMovies();
      setTopRatedMovies(response. results);
    };
    getTopRated();
  }, []);
  return (
    <div className="px-5">
      <div>
        <div className="flex justify-between  h-[36px] w-full ">
          <h3 className="text-2xl font-semibold pl-3">Top Rated</h3>
          <button className="flex py-2 px-4 gap-1 text-sm font-medium ">
            See More <ArrowRight className="h-[16px] w-[16px]  " />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
          {topRatedMovies.map((movie) => {
            return <Moviecart key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};
