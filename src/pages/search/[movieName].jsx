import { Footer } from "@/component /Footer";
import { Header } from "@/component /Header";
import { SearchResult } from "@/component /SearchResult";
import { useRouter } from "next/router";

export const Result = ({movie, setSearchValue}) => {
  const router = useRouter();
  const movieName = router.query.movieName;
  return (
    <div>
      <Header />
      <div>
        <h2>Search Results</h2>
        <div>
          <p> 5 results for “Wicked”</p>
          <SearchResult  />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Result;
