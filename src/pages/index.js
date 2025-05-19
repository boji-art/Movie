
import { Carousel } from "@/component /Carousel";
import { Header } from "@/component /Header";
import { Moviecart } from "@/component /Moviecart";
import { Upcoming } from "@/component /Upcoming";

export default function Home() {
  return(
    <div>
    <Header/>
   <Carousel/>
   <div>
   <Upcoming/>
    <Moviecart/>
    </div>
    </div>
  )
}

   