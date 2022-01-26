import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = (props) => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="detailPicture col"></div>
          <div className="detailText col">
            <h1 className="mx-auto text-center">
              {store.planets[params.theid]?.Name}
            </h1>
            <p className="text-center mx-4 p-5">
              Maecenas non placerat mauris. Vestibulum molestie, felis ut
              faucibus tincidunt, eros sapien tincidunt mi, nec malesuada erat
              quam non est. Aliquam nunc orci, dapibus non sapien ut, accumsan
              tincidunt ipsum. Pellentesque molestie sapien condimentum eros
              luctus lobortis non sit amet felis. In nec massa sagittis,
              efficitur turpis et, venenatis sem. Proin condimentum odio quis
              dictum eleifend. Donec aliquet velit tempus, lobortis est a,
              lacinia erat. In ullamcorper ornare pulvinar. Sed sed dolor at
              lacus hendrerit ullamcorper id in arcu. Ut pellentesque accumsan
              ex, fermentum interdum purus facilisis id. Aenean iaculis nulla et
              sodales semper. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Morbi facilisis ipsum
              sit amet lorem aliquam, at consectetur ligula suscipit. Donec arcu
              dui, blandit eget aliquam quis, iaculis eget turpis
            </p>
          </div>
          <div className="bottomInfo row border-top border-danger p-3">
            <div className="text-danger col">Name</div>
            <div className="text-danger col">Climate</div>
            <div className="text-danger col">Population</div>
            <div className="text-danger col">OrbitalPeriod</div>
            <div className="text-danger col">RotationPeriod</div>
            <div className="text-danger col">Diameter</div>
          </div>
        </div>
      </div>
      <div className="text-center p-5">
        <Link to="/">
          <span className="btn btn-primary btn-lg" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    </>
  );
};

PlanetDetails.propTypes = {
  match: PropTypes.object,
};