import { Film, MoonIcon, Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="h-[59px] flex items-center justify-between py-2 px-2 max-w-[1280px]">
      <div className="flex gap-3 ">
       <Film className=" text-indigo-700 h-[20px] w-[20px]"/>
      
       <p className="text-indigo-700 text-base">MovieZ</p>
      </div>
      <div className="flex gap-2">
        <img src="Icon Button.png" />
        <img src="Icon Button (1).png" />
      </div>
    </div>
  );
};
