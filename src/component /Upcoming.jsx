import { ArrowRight } from "lucide-react";
import { Moviecart } from "./Moviecart";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getUpcoming } from "@/utils/getUpComing";

export const Upcoming = () => {
  const [upComingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const response = await getUpcoming();
      setUpcomingMovies(response.results);
    };
    getUpcomingMovies();
  }, []);

  return (
    <div className="px-5">
      <div className="flex justify-between  h-[36px] w-full">
        <h3 className="text-2xl font-semibold pl-1">Upcoming</h3>
        <Link href={`/category/upcoming`}>
          <button className="flex py-2 px-4 gap-1 text-sm font-medium ">
            See More <ArrowRight className="h-[16px] w-[16px]  " />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {upComingMovies.slice(0, 10).map((movie) => {
          return <Moviecart key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
