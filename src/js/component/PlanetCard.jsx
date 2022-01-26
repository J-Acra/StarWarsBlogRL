import React, { useState, useContext } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);

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
          onClick={() => actions.checkFav(props.data)}
          type="button"
          className="ms-auto btn btn-warning"
        >
          {props.favStatus===true?<i className="fas fa-heart"></i>:<i className="far fa-heart"></i>}
        </button>
      </div>
    </div>
  );
};
export default PlanetCard;
