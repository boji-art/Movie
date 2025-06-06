import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { SearchResult } from "./SearchResult";
import { ChevronDown, Search, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
export const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movie, setMovie] = useState([]);

  const searchMovie = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}search/movie?query=${searchValue}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      setMovie(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovie();
  }, [searchValue]);

  return (
    <div className="relative ">
     
      <Input
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        type="text"
        placeholder="Search..."
        className="pl-[38px] border shadow-none sm:w-[36px] sm:h-[36px]"
        
        
      />
      {movie?.results?.length > 0 && (
        <SearchResult movie={movie} setSearchValue={setSearchValue} />
      )}
     
    </div>
  );
};
