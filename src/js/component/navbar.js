import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
  let [cursor, setCursor] = useState("pointer");
  const { store, actions } = useContext(Context);

  const changeCursor = () => {
    setCursor((prevState) => {
      if (prevState === "pointer") {
        return "default";
      }
      return "pointer";
    });
  };

  return (
    <nav className="navbar navbar-light bg-light mb-2 pb-5 px-3">
      <Link to="/">
        <span className="mb-0 h1">Star Wars</span>
      </Link>
      <div className="ml-auto">
        <div class="dropdown">
          <button
            class="btn btn-lg btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            data-bs-auto-close="inside"
            aria-expanded="false"
          >
            Favorites
            <span className="badge bg-secondary">{store.favorites.length}</span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((f) => (
              <li>
                <Link to="/single/0">
                  <p class="dropdown-item" href="#">
                    {f.Name}
                  </p>
                </Link>{" "}
                <i
                  style={{ cursor: cursor }}
                  onMouseEnter={() => changeCursor}
                  onClick={() => actions.remFav(props.data)}
                  class="fas fa-trash"
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
