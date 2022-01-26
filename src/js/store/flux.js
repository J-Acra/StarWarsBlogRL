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
          uid: 0,
          favorited: "far fa-heart",
          detail: "/CharacterDetails/",
          description: "This is a description",
        },
        {
          Name: "C3P0",
          height: "172",
          skinColor: "fair",
          hairColor: "Blonde",
          eyeColor: "Blue",
          birthYear: "19BBY",
          gender: "Robot",
          uid: 1,
          favorited: "far fa-heart",
          detail: "/CharacterDetails/",
          description: "This is a description",
        },
      ],
      planets: [
        {
          Name: "Tatooine",
          terrain: "Grasslands, Mountains",
          rotationPeriod: "23",
          orbitalPeriod: "304",
          diameter: "10465",
          climate: "arid",
          population: "200000",
          uid: 0,
          favorited: false,
          detail: "/PlanetDetails/",
          description: "This is a description",
        },
        {
          Name: "Aldeeera",
          terrain: "Grasslands, Mountains",
          rotationPeriod: "23",
          orbitalPeriod: "304",
          diameter: "10465",
          climate: "arid",
          population: "200000",
          uid: 1,
          favorited: false,
          detail: "/PlanetDetails/",
          description: "This is a description",
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
      checkFav: (favorite) => {
        const { favorites } = getStore();
        if (favorite.favorited===true){
          favorite.favorited = false;
        }
        else{
          favorite.favorited=true;
          setStore({ favorites: favorites.concat(favorite) });
        }
      },
      remFav: (position) => {
        const { favorites } = getStore();
        let newFavorites = favorites.map((item, index) => {
          if (index === position) {
            item["favorited"] = false;
            return item;
          } else {
            return item;
          }
        });
        console.log(newFavorites)
        setStore({
          favorites: newFavorites.filter((f, favId) => favId !== position),
        });
      },
      clearFavorites: () => {
        const { favorites } = getStore();
        setStore({ favorites: [] });
      },
    },
  };
};

export default getState;
