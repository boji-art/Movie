import { ArrowRight,  } from "lucide-react"

export const TopRated=()=>{
    return(
        <div className="px-5">
      <div className="flex justify-between  h-[36px] w-full">
        <h3 className="text-2xl font-semibold pl-3">Top Rated</h3>
        <button className="flex py-2 px-4 gap-1 text-sm font-medium ">
          See More <ArrowRight className="h-[16px] w-[16px]  " />
        </button>
        
      </div>
      </div>
    )
}