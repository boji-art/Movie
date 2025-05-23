import { StarIcon } from "lucide-react";

export const DetailsPage = () => {
  return (
    <div className="w-[375px] h-[56px] ">
      <h3 className="text-2xl font-bold">Wicked</h3>
      <p>2024.11.26 · PG · 2h 40m</p>
      <div className="flex">
        <StarIcon className="text-yellow-300 fill-yellow-300 " />
        <p className="w-[36] h-[16] pl-6px text-lg md:text-white">6.9</p>

        <p className="text-gray-500 text-md">/10</p>

      </div>
      <div>
        <img className="h-[201px] w-full  " src="Trailer.png"/>
      </div>
    </div>
  );
};

export default DetailsPage;
