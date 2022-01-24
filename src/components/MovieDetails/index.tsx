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
    <div style={{width : "100%" , height  :"100vh"}}>
      <h6 style={{    display: "grid",
    placeContent: "center",
    width: "100%",
    height: "100%"}}>
        Access to fetch at 'https://api.tvmaze.com/shows/undefined' from origin 'http://localhost:3001' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
        </h6>
    </div>
  );
}

export default MovieDetails;
