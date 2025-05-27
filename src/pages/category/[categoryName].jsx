import { Header } from "@/component /Header";
import { getSeeMoreMovies } from "@/utils/getSeeMoreMovies";
import { useEffect, useState } from "react";

const { useRouter } = require("next/router");

const Page = () => {
  const [upComing, setUpComing] = useState({});
  const router = useRouter();
  const categoryName = router.query.upComingId;
 

 
  
  return (
    <div>
      <Header />
      <h3 className="text-3xl font-semibold pt-20 pl-15">More Like This</h3>
      
      
    </div>
  );
};
export default Page;
