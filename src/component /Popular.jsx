import { ArrowRight } from "lucide-react";
import { Moviecart } from "./Moviecart";
import { useEffect, useState } from "react";
import { getPopularMovies } from "@/utils/getPopularMovies";

export const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const response = await getPopularMovies();
      setPopular(response.results);
    };
    getPopular();
  }, []);
  return (
    <div>
      <div className="flex justify-between  h-[36px] w-full">
        <h3 className="text-2xl font-semibold pl-3">Popular</h3>
        <button className="flex py-2 px-4 gap-1 text-sm font-medium ">
          See More <ArrowRight className="h-[16px] w-[16px]  " />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {popular.map((movie) => {
          return <Moviecart key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
