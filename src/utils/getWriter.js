import { config } from "./config";

export const getWriter = async (movieId) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movieId}/credits?language=en-US`,
      config
    );
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log(error);
  }
};
