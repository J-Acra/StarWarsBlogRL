import React, { useState, useContext } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetCard = (props) => {
  let [favToggle, setFavToggle] = useState("far fa-heart");
  const { store, actions } = useContext(Context);

  const handleToggle = () =>{
    (favToggle==="far fa-heart"? setFavToggle("fas fa-heart"): setFavToggle("far fa-heart"))
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="http://placehold.it/400x200"></img>
      <ul className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <li className="list-group-item ">Population: {props.population}</li>
        <li className="list-group-item ">Terrain: {props.terrain}</li>
      </ul>
      <div className="cardButtons d-flex">
        <Link to={props.detail}>
          <button type="button" className="btn btn-primary">
            Learn More!
          </button>
        </Link>
        <button
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(undefined)}
          onClick={() => {actions.addFav(props.data),handleToggle()}}
          type="button"
          className="ms-auto btn btn-warning"
        >
          <i className={favToggle}></i>
        </button>
      </div>
    </div>
  );
};
export default PlanetCard;
