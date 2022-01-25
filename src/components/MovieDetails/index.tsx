import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { fetchAsyncMoviesDetails, IMovie } from "../../redux/actions/movie";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import Loading from "../Loading";
import "./style.scss";

export interface IParams {
  id: string;
}

function MovieDetails(): ReactElement {
  const dispatch = useReduxDispatch();
  const { id = "5" } = useParams<IParams>();
  const [load, setLoad] = useState(false);

  const details = useReduxSelector((state: any) => state.movie.detailMov);

  console.log("id", id);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      dispatch(fetchAsyncMoviesDetails(id));
      setLoad(false);
    }, 2000);
  }, []);

  console.log("details", details);

  return (
    <Fragment>
      <div className="movie-section">
        {load ? (
          <Loading />
        ) : (
          <Fragment>
            <div className="section-left">
              <div className="movie-title">{details.name}</div>
              <div className="movie-rating">
                <span>
                  IMDB Rating <i className="fa fa-star"></i> : {details?.rating?.average}
                </span>
                <span>
                  IMDB Votes <i className="fa fa-thumbs-up"></i> : {details?.externals?.tvrage}
                </span>
                <span>
                  Runtime <i className="fa fa-film"></i> : {details?.runtime}
                </span>
                <span>
                  Year <i className="fa fa-calendar"></i> : {details?.premiered}
                </span>
              </div>
              <div className="movie-plot">{details.summary}</div>
              <div className="movie-info">
                <div>
                  <span>Director : </span>
                  <span>{" Roman Polanski"}</span>
                </div>
                <div>
                  <span>Stars : </span>
                  <span>{details?.rating?.average}</span>
                </div>
                <div>
                  <span>Generes : </span>
                  <span>{"Action"}</span>
                </div>
                <div>
                  <span>Languages : </span>
                  <span>{details?.language}</span>
                </div>
                <div>
                  <span>Awards :</span>
                  <span>{id}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img src={details?.image?.medium} alt={details.name} />
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default MovieDetails;
