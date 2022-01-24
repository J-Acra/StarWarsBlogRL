import React, {useState} from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  let [favToggle, setFavToggle] = useState("far fa-heart")

return (
<div className="card" style= {{width: "18rem"}}>
<img className="card-img-top" src={"http://placehold.it/400x200"}></img>
  <ul className="card-body">
    <h5 className="card-title">{props.characterName}</h5>
    <li className="list-group-item ">{props.gender}</li>
    <li className="list-group-item ">{props.hairColor}</li>
    <li className="list-group-item ">{props.eyeColor}</li>
  </ul>
  <div className="cardButtons d-flex">
    <button type="button" className="btn btn-primary">Learn More!</button>
    <button type="button" className="ms-auto btn btn-warning"><i className={favToggle}></i></button>
  </div>
</div>
)};
export default CharacterCard;
