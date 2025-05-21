import { MoonIcon, Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex h-[55px] max-w-[1280px]">
      <div className="flex items-center gap-3">
        <img src="film.png" className="h-[20px] w-[20px] " />
        <img src="Movie Z.png" className="h-[20px] w-[92px] " />
        <div className="flex gap-3">
          <button className=" w-[36px] h-[36px] border-b-neutral-600 border-1 rounded-xl ">
            <Search />
          </button>
          <button className="w-[36px] h-[36px] border-b-neutral-600 border-1 rounded-xl">
            <MoonIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
