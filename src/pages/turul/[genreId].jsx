import { GenreSelect } from "@/component /Genre/GenreSelect";
import { Header } from "@/component /Header";
import { Moviecart } from "@/component /Moviecart";
import { getGenre } from "@/utils/getGenre";
import { getSelectedMovieGenre } from "@/utils/getSelectedMovieGenre";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const GenrePage = () => {
  const router = useRouter();
  const genreId = router.query.genreId;
  const [movieGenre, setMovieGenre] = useState([]);

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
      <GenreSelect genreId={genreId} />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {movieGenre?.map((movie) => {
          return <Moviecart movie={movie} key={movie.id} />;
        })}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
             <PaginationLink href="#">2</PaginationLink>
              <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default GenrePage;
