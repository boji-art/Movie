import { MoonIcon, Search } from "lucide-react"

export const Header =()=>{
    return (
        <div className="flex justify-between  ">
        <div className="flex ">
            <img src="film.png" className="h-[20px] w-[20px] "/>
            <img src="Movie Z.png" className="h-[20px] w-[64px] "/>
            <div>
                <button className="w-[36px] h-[36px] border-b-neutral-600 border-1 rounded-xl "><Search/></button>
                <button className="w-[36px] h-[36px] border-b-neutral-600 border-1 rounded-xl"><MoonIcon/></button>
            </div>
            </div>
        </div>
    )
}