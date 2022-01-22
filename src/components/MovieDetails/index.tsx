import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import "./style.scss";

interface IUserPublicProfileRouteParams {
  id: string;
}
function MovieDetails() {
  const dispatch = useReduxDispatch();
  const { id } = useParams<IUserPublicProfileRouteParams>();
  const [charData, setCharData] = useState([]);

  const fetchCharData = async () => {
    const data = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const getData = await data.json();
    setCharData(getData);
  };

  useEffect(() => {
    fetchCharData();
  }, []);

  console.log("detail", charData);
  return (
    <div>
      <h1> hvbhbh</h1>
      <h1> hvbhbh</h1>
    </div>
  );
}

export default MovieDetails;
