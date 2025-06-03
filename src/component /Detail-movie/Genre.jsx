import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Genre = ({ movie }) => {
  return (
    <div>
      <div className="flex   items-center justify-between  gap-2 ">
        <div className="flex flex-col gap-2  ">
          <div className=" flex flex-col md:flex md:flex-row md:gap-2 md:p-3">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              className="  hidden w-[100px] h-[148px]  "
            />
            {movie?.genres?.map((genre) => (
              <Link href={`/turul/${genre.id} `} key={genre.id}>
                <Button key={genre.id} variant="outline">
                  {genre.name}
                </Button>
              </Link>
            ))}
          </div>

          <p> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
