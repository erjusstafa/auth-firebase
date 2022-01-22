import React, { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAsyncMovies } from "../../redux/actions/movie";
import { useReduxDispatch } from "../../redux/hooks";
import MovieListing from "../MovieListing";

function Movie(): ReactElement {
  const dispatch = useReduxDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <div>
      <div>
        <div className="banner-img"></div>
        <MovieListing />
      </div>
    </div>
  );
}

export default Movie;
