import { GenreSelect } from "@/component /Genre/GenreSelect";
import { Header } from "@/component /Header";
import { Moviecart } from "@/component /Moviecart";
import { getGenre } from "@/utils/getGenre";
import { getSelectedMovieGenre } from "@/utils/getSelectedMovieGenre";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const GenrePage = () => {
  const router = useRouter();
  const genreId = router.query.genreId;
  const [movieGenre, setMovieGenre] = useState([]);

  useEffect(() => {
    const getSelectedMovies = async () => {
      const response = await getSelectedMovieGenre();
      setMovieGenre(response?.results);
    };
    getSelectedMovies();
  }, []);

  return (
    <div>
      <Header />
      <GenreSelect genreId={genreId} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {movieGenre?. genre?.map((movie) => {
          return <Moviecart movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default GenrePage;
