import { config } from "./config";


export const getMoreLikeThis= async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${id}/similar?language=en-US&page=1`,
      config
    );

    const movies = await response.json();
    console.log("response more",response )

    return movies;
  } catch (error) {
    console.log(error);
  }
};
