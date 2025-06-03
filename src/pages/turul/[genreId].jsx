import { PagePagination } from "@/component /Detail-movie/Pagination";
import { Footer } from "@/component /Footer";
import { GenreSelect } from "@/component /Genre/GenreSelect";
import { Header } from "@/component /Header";
import { Moviecart } from "@/component /Moviecart";

import { getGenre } from "@/utils/getGenre";
import { getSelectedMovieGenre } from "@/utils/getSelectedMovieGenre";
import { useRouter } from "next/router";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

export const GenrePage = () => {
  const router = useRouter();
  const genreId = router.query.genreId;
  const [movieGenre, setMovieGenre] = useState([]);
 const [page,setPage]=useQueryState("page", parseAsInteger.withDefault(1));
 const totalPages= 10;


  useEffect(() => {
    const getSelectedMovies = async () => {
      const response = await getSelectedMovieGenre(genreId);
      setMovieGenre(response?.results);
    };
    getSelectedMovies();
  }, [genreId]);
  console.log(movieGenre);

  return (
    <div>
      <Header />
      <div className="flex ">
        <GenreSelect genreId={genreId} />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
          {movieGenre?.map((movie) => {
            return <Moviecart movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
      <PagePagination page={page} setPage={setPage} totalPages= {totalPages} />
      <Footer />
    </div>
  );
};
export default GenrePage;
