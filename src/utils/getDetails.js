import { config } from "./config";

export const getDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movieId}?language=en-US`,
      config
    );
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log(error);
  }
};
