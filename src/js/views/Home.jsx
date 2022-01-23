import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard.jsx"
import propTypes from "prop-types";
import PlanetCard from "../component/PlanetCard.jsx"


const Home = (props) => {
	return(
		<>
	<h1 className="text-danger ms-3">Characters</h1>
	<div className="characterDisplay d-flex flex-row text-center mt-5">
	<div className="col mx-3"><CharacterCard characterName="Luke Skywalker" gender="Gender:Male" hairColor="Hair-Color: Blonde" eyeColor="Eye-Color: blue"/></div>
	<div className="col mx-3"><CharacterCard characterName="Luke Skywalker" gender="Gender:Male" hairColor="Hair-Color: Blonde" eyeColor="Eye-Color: blue"/></div>
	<div className="col mx-3"><CharacterCard characterName="Luke Skywalker" gender="Gender:Male" hairColor="Hair-Color: Blonde" eyeColor="Eye-Color: blue"/></div>
	<div className="col mx-3"><CharacterCard characterName="Luke Skywalker" gender="Gender:Male" hairColor="Hair-Color: Blonde" eyeColor="Eye-Color: blue"/></div>
	<div className="col mx-3"><CharacterCard characterName="Luke Skywalker" gender="Gender:Male" hairColor="Hair-Color: Blonde" eyeColor="Eye-Color: blue"/></div>
	<div className="col mx-3"><CharacterCard characterName="Luke Skywalker" gender="Gender:Male" hairColor="Hair-Color: Blonde" eyeColor="Eye-Color: blue"/></div>
	<div className="col mx-3"><CharacterCard characterName="Luke Skywalker" gender="Gender:Male" hairColor="Hair-Color: Blonde" eyeColor="Eye-Color: blue"/></div>
	<div className="col mx-3"><CharacterCard characterName="Luke Skywalker" gender="Gender:Male" hairColor="Hair-Color: Blonde" eyeColor="Eye-Color: blue"/></div>
	<div className="col mx-3"><CharacterCard characterName="Luke Skywalker" gender="Gender:Male" hairColor="Hair-Color: Blonde" eyeColor="Eye-Color: blue"/></div>
	</div>
	<h1 className="text-danger ms-3 mt-3">Planets</h1>
	<div className="planetDisplay d-flex flex-row text-center mt-5">
	<div className="col mx-3"><PlanetCard planetName="Alderaan" population="Population: 20,000" terrain="Terrain:Rocky"/></div>
	<div className="col mx-3"><PlanetCard planetName="Alderaan" population="Population: 20,000" terrain="Terrain:Rocky"/></div>
	<div className="col mx-3"><PlanetCard planetName="Alderaan" population="Population: 20,000" terrain="Terrain:Rocky"/></div>
	<div className="col mx-3"><PlanetCard planetName="Alderaan" population="Population: 20,000" terrain="Terrain:Rocky"/></div>
	<div className="col mx-3"><PlanetCard planetName="Alderaan" population="Population: 20,000" terrain="Terrain:Rocky"/></div>
	<div className="col mx-3"><PlanetCard planetName="Alderaan" population="Population: 20,000" terrain="Terrain:Rocky"/></div>
	<div className="col mx-3"><PlanetCard planetName="Alderaan" population="Population: 20,000" terrain="Terrain:Rocky"/></div>
	<div className="col mx-3"><PlanetCard planetName="Alderaan" population="Population: 20,000" terrain="Terrain:Rocky"/></div>
	<div className="col mx-3"><PlanetCard planetName="Alderaan" population="Population: 20,000" terrain="Terrain:Rocky"/></div>

	</div>
	
	</>

	)
};

export default Home;
