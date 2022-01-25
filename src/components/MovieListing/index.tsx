import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { IMovie, IProd } from "../../redux/actions/movie";
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


  console.log("grtdt", getData);
  
  const items = getData.map((movie: IMovie, index: number) => (
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
  const [moreLoad, setMoreLoad] = useState<number>(28);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleMoreLoad = () => {
    setMoreLoad(moreLoad + 28);
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
                fontWeight: "800",
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
              autoPlay={true}
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
            .splice(0, moreLoad)
            .map((movie: IMovie, index: number) => (
              <MovieCard key={index} data={movie} />
            ))}
        </div>

        {
          <div className="load-more">
            {moreLoad < getData.length ? (
              <button onClick={handleMoreLoad}> more</button>
            ) : (
              <button onClick={() => setMoreLoad(28)}>less</button>
            )}
          </div>
        }
      </div>
    </div>
  );
}

export default MovieListing;
