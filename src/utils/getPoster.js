import { config } from "./config";

export const getPoster = async (movieId) => {
  try {
    const response = await fetch(
     ,
      config
    );

    const movies = await response.json();

    return movies;
  } catch (error) {
    console.log(error);
  }
};
