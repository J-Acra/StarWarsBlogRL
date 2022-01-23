import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
	return (
		<nav className="navbar navbar-light bg-light mb-2 pb-5 px-3">
			<Link to="/">
				<span className="mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
			<div class="dropdown">
  <button class="btn btn-lg btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites <span className="badge bg-secondary">{props.favCounter}</span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
   <li><Link to="./single/0" className="dropdown-item" > Action</Link></li>
   <li><Link to="./single/1" className="dropdown-item" > Action</Link></li>
   <li><Link to="./single/2" className="dropdown-item" > Action</Link></li>
  </ul>
</div>
			</div>
		</nav>
	);
};
