import React, { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {  fetchAsyncMoviesDetails, IMovie } from "../../redux/actions/movie";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import Loading from "../Loading";
import "./style.scss";

export interface IParams {
  id: string;
}


function MovieDetails() {
  const dispatch = useReduxDispatch();
  const { id } = useParams<IParams>();
  const [charData, setCharData] = useState<IMovie[]>([]);
  const [load, setLoad] = useState(false);

  const merr = useReduxSelector((state) => state.movie.detailMov)

  

/*   const fetchCharData = async () => {
    return await fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setCharData(data))
      .catch((error) => console.log("error", error));
  };
 */

/*   useEffect(() => {
    setLoad(true);
    setTimeout(() => {
    fetchCharData(id)
      setLoad(false);
    }, 2000);
  }, []);
 */


  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
     dispatch(fetchAsyncMoviesDetails(id))
      setLoad(false);
    }, 2000);
  }, []); 


  
  console.log("detail", charData);
  console.log("mer", merr);

  return (
    <Fragment>
      {load ? (
        <Loading />
      ) : (
        <div style={{ width: "100%", height: "100vh" }}>
          <h6 style={{ display: "grid", placeContent: "center", width: "100%", height: "100%" }}>
            Access to fetch at 'https://api.tvmaze.com/shows/undefined' from origin 'http://localhost:3001' has been
            blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an
            opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS
            disabled.
          </h6>
        </div>
      )}
    </Fragment>
  );
}

export default MovieDetails;
