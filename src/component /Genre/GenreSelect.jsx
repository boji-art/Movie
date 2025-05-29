import { Button } from "@/components/ui/button";
import { getGenre } from "@/utils/getGenre";
import Link from "next/link";
import { useEffect, useState } from "react";

export const GenreSelect = ({ genreId }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const genress = async () => {
      const response = await getGenre();

      setGenres(response?.genres);
    };
    genress();
  }, [genreId]);

  return (
    <div>
      {genres.map((genre) => (
        <Link href={`/turul/${genre.id}`}>
          <Button
            key={genre.id}
            variant={genreId === String(genre.id) ? "default" : "outline"}
          >
            {genre.name}{" "}
          </Button>
        </Link>
      ))}
    </div>
  );
};
