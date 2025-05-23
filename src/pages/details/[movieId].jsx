import { Genre } from "@/component /Detail-movie/Genre";
import { Top } from "@/component /Detail-movie/Top";
import { Trailer } from "@/component /Detail-movie/Trailer";
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
    <div>
      <Top />
      <Trailer movie={detailPage} />
      <Genre />
    </div>
  );
};

export default DetailsPage;
