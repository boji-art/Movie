import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getGenre } from "@/utils/getGenre";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Genre1 = ({ genreId }) => {
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
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline">
            <ChevronDown />
            Genres
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {genres.map((genre) => (
            <Link href={`/turul/${genre.id}`}>
              <DropdownMenuItem key={genre.id}>{genre.name}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
