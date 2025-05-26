import { Genre } from "@/component /Detail-movie/Genre";
import { MOreLikeThis } from "@/component /Detail-movie/MoreLikeThis";
import { Poster } from "@/component /Detail-movie/Poster";
import { Top } from "@/component /Detail-movie/Top";
import { Trailer } from "@/component /Detail-movie/Trailer";
import { Footer } from "@/component /Footer";
import { Header } from "@/component /Header";
import { getDetails } from "@/utils/getMovieId";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const DetailsPage = () => {
  const [detailPage, setDetailPage] = useState([]);
  const router = useRouter();
  const movieId = router.query.movieId;

  useEffect(() => {
    const getDetailPage = async () => {
      const response = await getDetails(movieId);
      setDetailPage(response);
      // console.log(setDetailPage)
    };
    getDetailPage();
  }, []);

  return (
    <div className="container mx-auto overflow-hidden max-w-1280px px-2 py-4">
      <Header/>
      <Top movie={detailPage}/>
      <Trailer movie={detailPage} />
      <div className="flex gap-4">
        {/* <Poster /> */}
      <Genre movie={detailPage}/>
      </div>
      <MoreLikeThis />
      <Footer/> 
    </div>
  );
};

export default DetailsPage;
