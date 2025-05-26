import { Film,MoonIcon,SearchIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="h-[59px] flex items-center justify-between py-2 px-2 max-w-[1280px]">
      <div className="flex gap-2 ">
       <Film className=" text-indigo-700 h-[20px] w-[20px]"/>
      
       <p className="text-indigo-700 text-base font-bold">Movie Z</p>
      </div>
      <div className="flex gap-2">
        <button className=" rounded-lg border-gray-300 border h-[34px] w-[34px]"><SearchIcon className="ml-2 h-[16px] w-[16px]"/></button>
        <button className=" rounded-lg border-gray-300 border h-[34px] w-[34px]"><MoonIcon className="ml-2 h-[16px] w-[16px]"/></button>
      </div>
    </div>
  );
};
