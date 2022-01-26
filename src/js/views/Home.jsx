import React, {useState,useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard.jsx";
import propTypes from "prop-types";
import PlanetCard from "../component/PlanetCard.jsx";
import { Context } from "../store/appContext";

const Home = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <h1 className="text-danger ms-3">Characters</h1>
      <div className="characterDisplay d-flex flex-row text-center mt-5">
        {store.characters.map((c,id) => <div className="col mx-3"> <CharacterCard 
        name={store.characters[id].Name}
        gender={store.characters[id].gender}
        hairColor={store.characters[id].hairColor}
        eyeColor={store.characters[id].eyeColor}
        data={c}/> </div> )}
      </div>
      <h1 className="text-danger ms-3 mt-3">Planets</h1>
      <div className="planetDisplay d-flex flex-row text-center mt-5">
        {store.planets.map((c,id) => <div className="col mx-3"> <PlanetCard 
        name={store.planets[id].Name}
        population={store.planets[id].population}
        terrain={store.planets[id].terrain}
        data={c}/> </div> )}
      </div>
    </>
  );
};

export default Home;
