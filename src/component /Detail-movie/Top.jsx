import { StarIcon } from "lucide-react";

export const Top = ({ movie }) => {
  return (
    <div className="">
      <h3 className="text-2xl font-bold">{movie?.title}</h3>
      <div className="flex  items-center justify-between">
        <p>2024.11.26 · PG · 2h 40m</p>
        <div className="flex">
          <StarIcon className="text-yellow-300 fill-yellow-300 " />
          <div className="flex gap-1">
            <p className="w-[36] h-[16] pl-6px text-md">6.9</p>
            <p className="text-gray-500 text-md">/10</p>
            <p className="text-gray-500 text-md">37k</p>
          </div>
        </div>
      </div>
    </div>
  );
};
