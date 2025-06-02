import { Footer } from "@/component /Footer";
import { Header } from "@/component /Header";
import { Moviecart } from "@/component /Moviecart";
import { getMoreLikeThis } from "@/utils/getMoreLikeThis";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MoreLike = () => {
  const [moreLikeMovies, setMoreLikeMovies] = useState([]);
  const router = useRouter();
  const categoryName = router.query.categoryName;

  useEffect(() => {
    if (!categoryName) return;
    const getMoreLikeMovies = async () => {
      const data = await getMoreLikeThis(categoryName);

      setMoreLikeMovies(data?.results);
    };
    getMoreLikeMovies();
  }, [categoryName]);
  console.log(moreLikeMovies);
  return (
    <div>
      <Header />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {moreLikeMovies?.map((movie) => (
          <Moviecart movie={movie} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default MoreLike;
