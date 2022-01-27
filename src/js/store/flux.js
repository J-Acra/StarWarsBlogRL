const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      characters: [],
      planets: [],
      images: {
        "/PlanetDetails/0":
          "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg",
      },
    },
    actions: {
      loadCharacters: async () => {
        const response = await fetch("https://swapi.dev/api/people");
        if (response.status === 200) {
          const payload = await response.json();
          const myNewCharacters = payload.results.map((people, i) => {
            (people.detail = "/CharacterDetails/"), (people.favStatus = false);
            people.uid = i;
            return people;
          });
          setStore({ characters: myNewCharacters });
          console.log(payload.results);
        }
      },
      loadPlanets: async () => {
        const response = await fetch("https://swapi.dev/api/planets");
        if (response.status === 200) {
          const payload = await response.json();
          const myNewPlanets = payload.results.map((planets, i) => {
            (planets.detail = "/PlanetDetails/"), (planets.favStatus = false);
            planets.uid = i;
            return planets;
          });
          setStore({ planets: myNewPlanets });
          console.log(myNewPlanets);
        }
      },
      checkFav: (favoriteCard) => {
        const { favorites } = getStore();
        if (favoriteCard.isFav === true) {
          favoriteCard.isFav = false;
          setStore({
            favorites: favorites.filter(
              (favoriteItem) =>
                favoriteItem.uid + favoriteItem.name !==
                favoriteCard.uid + favoriteCard.name
            ),
          });
        } else {
          favoriteCard.isFav = true;
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
        console.log(newFavorites);
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
