import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { useReduxSelector } from "../../redux/hooks";
import MovieCard from "../MovieCard";
import Search from "../Search";
import "./style.scss";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 4 },
};
function MovieListing() {
  const getData = useReduxSelector((state) => state.movie.movies);
  const items = getData.map((movie: any, index: number) => (
    <div className="card-item" key={index}>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
        <div className="card-inner">
          <div className="card-top">
            <img src={movie.image.medium} alt={movie.name} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{movie.name}</h4>
              <p>{movie.ended}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));

  const [search, setSearch] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="wrap-one">
          <div className="one-plako">
            <p
              style={{
                padding: "10px 0 ",
                color: "#def",
                fontSize: "25px",
                textAlign: "start",
              }}
            >
              Movies
            </p>
            <AliceCarousel
              mouseTracking
              responsive={responsive}
              infinite={true}
              autoPlayInterval={1500}
              items={items}
              disableDotsControls={true}
            />
          </div>
        </div>
      </div>
      <div className="input-search">
        <Search search={search} handleSearch={handleSearch} />
      </div>
      <div className="show-list">
        <h2
          style={{
            padding: "10px 0 ",
            color: "#494949",
            fontSize: "25px",
            textAlign: "start",
          }}
        >
          Shows List
        </h2>
        <div className="movie-container">
          {getData
            .filter((item: any) => {
              return item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((movie: any, index: number) => (
              <MovieCard key={index} data={movie} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieListing;
