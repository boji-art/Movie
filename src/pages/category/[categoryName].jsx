import { Header } from "@/component /Header";

import { getSeeMoreMovies } from "@/utils/getSeeMoreMovies";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { Moviecart } from "@/component /Moviecart";
import { Footer } from "@/component /Footer";

const Page = () => {
  const [upComingMovies, setUpcomingMovies] = useState([]);
  const router = useRouter();
  const categoryName = router.query.categoryName;

  useEffect(() => {
    if (!categoryName) return;
    const getUpComingMovies = async () => {
      const data = await getSeeMoreMovies(categoryName);

      setUpcomingMovies(data?.results);
    };
    getUpComingMovies();
  }, [categoryName]);

  return (
    <div>
      <Header />

      <div  className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {upComingMovies?.map((movie) => (
          <Moviecart movie={movie} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Page;
