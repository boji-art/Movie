import { StarIcon } from "lucide-react";

export const Top = ({ movie }) => {
  return (
    <div className="md: pl-4">
      <h3 className="text-2xl font-bold">{movie?.title}</h3>
      <div className="flex  items-center ">
        <p>2024.11.26 · PG · 2h 40m</p>
        <div className="flex md:items-center ">
          <StarIcon className="text-yellow-300 fill-yellow-300 " />
          
          <div className="flex gap-1 md:flex-col">
            <p className="invisible md:visible ">rating</p>
            <p className="w-[36] h-[16] pl-6px text-md">6.9</p>
            <div className="md:flex md:flex-col md:items-center ">
            <p className="text-gray-500 text-md">/10</p>
            <p className="text-gray-500 text-md ">37k</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};
