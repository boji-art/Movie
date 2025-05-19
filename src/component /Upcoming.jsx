import { ArrowRight } from "lucide-react"

export const Upcoming =()=>{
    return(
        <div className="flex justify-between w-[335px] h-[36px] md:w-[1440px]">
        <h3 className="text-2xl font-semibold pl-3">Upcoming</h3>
        <button className="flex py-2 px-4 gap-1 text-sm font-medium "> See More <ArrowRight className="h-[16px] w-[16px]  "/></button>
        </div>
    )
}