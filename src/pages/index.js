import { MovieCarousel } from "@/component /Carousel";
import { Footer } from "@/component /Footer";
import { Header } from "@/component /Header";
import { Popular } from "@/component /Popular";
import { TopRated } from "@/component /TopRated";
import { Upcoming } from "@/component /Upcoming";

export default function Home() {
  return (
    <div className="container mx-auto overflow-hidden ">
      <Header />

      <MovieCarousel />
      {/* <MovieTrailer /> */}
      <div className="flex flex-col gap-4 px-2 py-4 max-w-[1280px] ">
        <Upcoming />
        <Popular />
        <TopRated />
        <Footer />
      </div>
    </div>
  );
}
