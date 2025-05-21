import { ArrowRight } from "lucide-react";
import { Moviecart } from "./Moviecart";
import { useEffect, useState } from "react";

export const Upcoming = () => {
  const [upComingMovie, setUpcomingMovie] = useState([]);
  const getUpcoming = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/upcoming?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      setUpcomingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUpcoming();
  }, []);

  return (
    <div className="px-5">
      <div className="flex justify-between  h-[36px] w-full">
        <h3 className="text-2xl font-semibold pl-3">Upcoming</h3>
        <button className="flex py-2 px-4 gap-1 text-sm font-medium ">
          See More <ArrowRight className="h-[16px] w-[16px]  " />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {upComingMovie.map((movie, index) => {
          return <Moviecart movie={movie} />;
        })}
      </div>
    </div>
  );
};
