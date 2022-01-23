import React, {useState} from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const PlanetCard = (props) => {
    let [favToggle, setFavToggle] = useState(<i className="far fa-heart"></i>)
return (
    <div className="card" style= {{width: "18rem"}}>
    <img className="card-img-top" src="http://placehold.it/400x200"></img>
      <ul className="card-body">
        <h5 className="card-title">{props.planetName}</h5>
        <li className="list-group-item ">{props.population}</li>
        <li className="list-group-item ">{props.terrain}</li>
      </ul>
      <div className="cardButtons d-flex">
        <button type="button" className="btn btn-primary">Learn More!</button>
        <button type="button" className="ms-auto btn btn-warning">{favToggle}</button>
      </div>
    </div>
    )};
    export default PlanetCard;
    