import { Header } from "@/component /Header";

import { getSeeMoreMovies } from "@/utils/getSeeMoreMovies";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { Moviecart } from "@/component /Moviecart";
import { Footer } from "@/component /Footer";

const Page = () => {
  const [upComingMovies, setUpcomingMovies] = useState({});
  const router = useRouter();
  const categoryName = router.query.upComingId;
  
  useEffect(() => {
    if (!categoryName) return;
    const getUpComingMovies = async () => {
      const data = await getSeeMoreMovies(categoryName);

      setUpcomingMovies(data);
    };
    getUpComingMovies();
  }, [categoryName]);

  return (
    <div>
      <Header />

      <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:max-w-[1800px] mx-auto pt-[52px]">
        {upComingMovies.map((movie) => (
          <Moviecart movie={movie} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Page;
