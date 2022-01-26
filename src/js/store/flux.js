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
          isFav: false,
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
          isFav: false,
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
          isFav: false,
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
          isFav: false,
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
      checkFav: (favoriteCard) => {
        const { favorites } = getStore();
        if (favoriteCard.isFav===true){
          favoriteCard.isFav = false;
          setStore({favorites: favorites.filter(favoriteItem => favoriteItem.uid + favoriteItem.Name !== favoriteCard.uid + favoriteCard.Name)})
        }
        else{
          favoriteCard.isFav=true;
          setStore({ favorites: favorites.concat(favoriteCard) });
        }
      },
      remFav: (position) => {
        const { favorites } = getStore();
        let newFavorites = favorites.map((item, index) => {
          if (index === position) {
            item["isFav"] = false;
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
