import { getMoreLikeThis } from "@/utils/getMoreLikeThis";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Moviecart } from "../Moviecart";

export const MoreLikeThis = () => {
  const [moreLikeThis, setMoreLikeThis] = useState([]);

  useEffect(() => {
    const getMoreLike = async () => {
      const response = await getMoreLikeThis();
      setMoreLikeThis(response.results);
    };
    getMoreLike();
  }, []);

  return (
    <div className="px-5">
      <div className="flex justify-between  h-[36px] w-full">
        <h4 className="text-2xl font-semibold pl-1">More Like This</h4>
        <button className="flex py-2 px-4 gap-1 text-sm font-medium ">
          See More <ArrowRight className="h-[16px] w-[16px]  " />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {moreLikeThis.slice(0, 5).map((movie) => {
          return <Moviecart key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
