const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [
    ],
      characters: [
        {
          Name: "Luke Skywalker",
          height: "172",
          skinColor: "fair",
          hairColor: "Blonde",
          eyeColor: "Blue",
          birthYear: "19BBY",
          gender: "Male",
          id: 0,
        },
                {
          Name: "Luke Skywalker",
          height: "172",
          skinColor: "fair",
          hairColor: "Blonde",
          eyeColor: "Blue",
          birthYear: "19BBY",
          gender: "Male",
          id: 1,
        },
      ],
      planets: [
        {
          Name: "Tatooine",
          terrain:"Grasslands, Mountains",
          rotation_period: "23",
          orbital_period: "304",
          diameter: "10465",
          climate: "arid",
          population: "200000",
          id: 2,
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      addFav: (favorite) => {
        const { favorites } = getStore();
        setStore({ favorites: favorites.concat(favorite) });
      },
      remFav: (favoriteId) => {
        const { favorites } = getStore();
        setStore({favorites : store.favorites.filter(f => f.id !==favoriteId) });
      },
    },
  };
};

export default getState;
