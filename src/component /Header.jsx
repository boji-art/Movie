import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Film,
  MoonIcon,
  Search,
  SearchIcon,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { Genre1 } from "./Genre/Genre1";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <div className="h-[59px] flex  items-center py-3 px-3 max-w-[1280px]">
      <div className="flex  gap-2 ">
        <Link href={`/`}>
          <Film className=" text-indigo-700 h-[20px] w-[20px]" />
        </Link>

        <p className="text-indigo-700 text-base font-bold">Movie Z</p>
        <Genre1/>
        <div className="hidden md:flex gap-[12px]">
          <Button variant="outline">
            <Search />
            <input
              type="text"
              placeholder="Search.."
              className="outline-none"
            />
          </Button>
        </div>

        <div className="flex gap-3   ">
          <Button variant="outline" className="flex gap-3 md:hidden">
            <Search />
          </Button>

          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
