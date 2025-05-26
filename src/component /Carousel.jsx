import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCarouselItem } from "./MovieCarouselItem";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../utils/getNowPlayingMovies";

export function MovieCarousel() {
  const [nowPlaying, setNowPlayingMovie] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await getNowPlayingMovies();

      setNowPlayingMovie(response.results);
    };
    getMovies();
  }, []);

  return (
    <Carousel
      className="relative w-full"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {nowPlaying?.slice(0, 4).map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <MovieCarouselItem movie={movie} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" md:left-5"/>
      <CarouselNext className="md:right-5" />
    </Carousel>
  );
}
