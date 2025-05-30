import { Button } from "@/components/ui/button";

export const Genre = ({ movie }) => {
  return (
    <div>
      <div className="flex  items-center justify-between  gap-2 ">
        
        <div className="flex gap-2">
          {/* {movie.genres.map((genre)=>)} */}
          <Button variant="outline"> 
            Fairy Tale
          </Button>
          
          
          <p> {movie.overview}
          </p>
        </div>
      </div>

      <div>
        <div className=" flex 
        flex-row font-base h-[28px] gap-15 ">
          <span className="font-bold ">Director</span>
          <span>Jon M. Chu</span>
        </div>
        <div className=" flex font-base h-[28px] gap-15 ">
          <span className="font-bold ">Writers</span>
          <span>Winnie Holzman · Dana Fox · Gregory Maguire</span>
          
        </div>
        <div className=" flex font-base h-[28px] gap-15 ">
          <span className="font-bold">Stars</span>
          <span>Cynthia Erivo · Ariana Grande · Jeff Goldblum</span>
        </div>
      </div>
    </div>
  );
};
