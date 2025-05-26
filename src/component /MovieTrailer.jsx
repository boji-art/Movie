import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getMovieTrailer } from "@/utils/getMovieTrailer";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

export const MovieTrailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        console.log("end movie bna");
        const data = await getMovieTrailer(movieId);
        console.log("this is data", data);

        setTrailer(data?.results);
      } catch (error) {
        console.error("Failed to fetch movie trailer", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);

  const movieTrailer = trailer?.find(
    (video) => video.name === "Official Trailer"
  );

  console.log(trailer);

  console.log(movieTrailer);

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button >Watch Trailer</Button>
      </DialogTrigger>
      <DialogContent className="max-w-fit! bg-black border-black p-0 overflow-hidden">
        <DialogTitle></DialogTitle>
        <div className="w-[1500px] h-[1000px]">
          <YouTube
            className="h-full w-full"
            videoId={movieTrailer?.key}
            opts={{
              width: "100%",
              height: "100%",
            playerVars:{
              autoplay:1,
            },

            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
