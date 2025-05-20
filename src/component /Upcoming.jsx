import { ArrowRight } from "lucide-react";
import { Moviecart } from "./Moviecart";

export const Upcoming = () => {
  return (
    <div className="px-5">
      <div className="flex justify-between  h-[36px] w-full">
        <h3 className="text-2xl font-semibold pl-3">Upcoming</h3>
        <button className="flex py-2 px-4 gap-1 text-sm font-medium ">
          See More <ArrowRight className="h-[16px] w-[16px]  " />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {[1, 2, 3, 4, 5].map(() => {
          return <Moviecart />;
        })}
      </div>
    </div>
  );
};
