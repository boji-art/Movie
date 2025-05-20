import { MovieCarousel } from "@/component /Carousel";
import { Header } from "@/component /Header";
import { Moviecart } from "@/component /Moviecart";
import { TopRated } from "@/component /TopRated";
import { Upcoming } from "@/component /Upcoming";

export default function Home() {
  return (
    <div className="container mx-auto overflow-hidden">
      <Header />
      <MovieCarousel />
      <div>
        <Upcoming />
        <TopRated/>
      </div>
    </div>
  );
}
