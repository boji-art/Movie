import { MovieCarousel } from "@/component /Carousel";
import { Footer } from "@/component /footer";
import { Header } from "@/component /Header";
import { Popular } from "@/component /Popular";
import { TopRated } from "@/component /TopRated";
import { Upcoming } from "@/component /Upcoming";


export default function Home() {
  return (
    <div className="container mx-auto overflow-hidden ">
      <Header />
      <MovieCarousel />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
