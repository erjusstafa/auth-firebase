import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function MovieCard(props: any): ReactElement {

  return (
    <div className="card-item">
      <Link to={`/movie/${props.data.id}`} style={{ textDecoration: "none" }}>
        <div className="card-inner">
          <div className="card-top">
            <img src={props.data.image.medium} alt={props.data.name} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{props.data.name}</h4>
              <p>{props.data.ended}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
