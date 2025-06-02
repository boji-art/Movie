import { Genre } from "@/component /Detail-movie/Genre";
import { MoreLikeThis } from "@/component /Detail-movie/MoreLikeThis";

import { Top } from "@/component /Detail-movie/Top";
import { Trailer } from "@/component /Detail-movie/Trailer";
import { Writer } from "@/component /Detail-movie/Writer";
import { Footer } from "@/component /Footer";
import { Header } from "@/component /Header";

import { MovieTrailer } from "@/component /MovieTrailer";
import { getDetails } from "@/utils/getDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const DetailsPage = () => {
  const [movie, setMovie] = useState({});
  const router = useRouter();
  const movieId = router.query.movieId;

  console.log("MOVIE ID --------------------", movieId);

  useEffect(() => {
    if (!movieId) return;
    const getDetailPage = async () => {
      const response = await getDetails(movieId);
      setMovie(response);
    };
    getDetailPage();
  }, [movieId]);
  console.log(movie);

  return (
    <div className="container mx-auto overflow-hidden max-w-1280px px-2 py-2 ">
      <Header />
      <Top movie={movie} />
      <div className="  gap-2">
        <Trailer movie={movie} />
        <Genre movie={movie} />

        <Writer movie={movie} />
      </div>
      <MoreLikeThis movieId={movie.id} />
      <Footer />
    </div>
  );
};

export default DetailsPage;
