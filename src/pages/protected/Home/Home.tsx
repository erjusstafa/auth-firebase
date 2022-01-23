import React, { FC } from "react";
import Movie from "../../../components/Movie";
import "./style.scss";
const Home: FC = () => {
  return (
    <div className="home">
      <Movie />
    </div>
  );
};

export default Home;
