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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Genre1 = () => {
const router = useRouter();
  const genre = router.query.genre;
  const [genreId,setGenreId]=useState([]);

  useEffect(()=>{
    // if (!categoryName) return;
        const getGenreId= async () => {
          const data = await getGenre();
    
          setGenreId(data?.results);
        };
       getGenreId();
      }, []);

  }
  console.log(genreId)
     


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronDown />
          Genre
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>See lists of movies by genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>

        </DropdownMenuItem>
        

      </DropdownMenuContent>
    </DropdownMenu>
  );
};
