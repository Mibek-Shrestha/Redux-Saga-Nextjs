// import { useEffect } from "react";

import { useEffect } from "react";
import container from "./MoviesList.container";

const MoviesList = ({
  onFetchMovieListStart,
  movieList: {
    moveSliderList: { data, hasMore, totalCount, count, page: pageNumber },
  },
  ...rest
}) => {
  useEffect(() => {
    console.log("inside use effect");
    onFetchMovieListStart({});
  }, []);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default container(MoviesList);
