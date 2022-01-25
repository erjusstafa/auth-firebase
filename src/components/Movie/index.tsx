import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAsyncMovies } from "../../redux/actions/movie";
import { useReduxDispatch } from "../../redux/hooks";
import Loading from "../Loading";
import MovieListing from "../MovieListing";

function Movie(): ReactElement {
  const [load, setLoad] = useState(false);
  const dispatch = useReduxDispatch();

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      dispatch(fetchAsyncMovies());
      setLoad(false);
    }, 2000);
  }, [dispatch]);
  return (
    <div>
      <div>
        <div className="banner-img"></div>
        {load ? <Loading /> : <MovieListing />}
      </div>
    </div>
  );
}

export default Movie;
