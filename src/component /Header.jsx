import { MoonIcon, Search } from "lucide-react"
    
export const Header =()=>{
    return (
        <div className="flex  w-[375px] h-[55px] justify-between md:w-[1440px]">
        <div className="flex ">
            <img src="film.png" className="h-[20px] w-[20px] "/>
            <img src="Movie Z.png" className="h-[20px] w-[92px] "/>
            <div>
                <button className="w-[36px] h-[36px] border-b-neutral-600 border-1 rounded-xl "><Search/></button>
                <button className="w-[36px] h-[36px] border-b-neutral-600 border-1 rounded-xl"><MoonIcon/></button>
            </div>
            </div>
        </div>
    )
}