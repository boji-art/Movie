import { Header } from "@/component /Header";
import { config } from "@/utils/config";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Genre (){
     const router = useRouter();
      const genre = router.query.genre;
      const [genres, getGenres]=useState([]);
     
       useEffect(() => {
          // if (!categoryName) return;
          const getGenres= async () => {
            const data = await getSeeMoreMovies(categoryName);
      
            setUpcomingMovies(data?.results);
          };
          getUpComingMovies();
        }, [categoryName]);
      

      
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/discover/movie?language=en&with_genres=${genreIds}&page=${page}`,
            config
          );
      
          const movies = await response.json();
      
          return movies;
        } catch (error) {
          console.log(error);
        }
      };
    

    return(
        <div>
            <Header/>

           <h2>Search results</h2>
        </div>
    )
}