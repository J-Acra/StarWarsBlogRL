const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      characters: [],
      planets: [],
      images: {
        "/PlanetDetails/0":
          "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg",
        "/PlanetDetails/1": "https://i.ytimg.com/vi/3zJwYXB2ID0/hqdefault.jpg",
        "/CharacterDetails/0":
          "https://insidethemagic.net/wp-content/uploads/2022/01/luke-skywalker-780x400.jpeg",
        "/CharacterDetails/1":
          "https://pbs.twimg.com/profile_images/726538115196792833/UjIQA2Gw_400x400.jpg",
        "/CharacterDetails/2":
          "https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202139/0077/img56o.jpg",
        "/CharacterDetails/3": "https://cdn.abcotvs.com/dip/images/1072434_110615-cc-Darth-Vader-Thumb.jpg?w=1280&r=16%3A9",
        "/CharacterDetails/4": "https://images.hobbydatabase.com/processed_uploads/subject_photo/subject_photo/image/80318/1634799000-1862-4090/Princess_20Leia_large.JPG",
        "/CharacterDetails/5": "https://www.starwars-universe.com/images/encyclopedie/personnages/avatars_v6/owen_avv6.jpg",
        "/CharacterDetails/6": "https://i.pinimg.com/originals/e6/25/5e/e6255e7b9bcf55906b46b1d2755c73ec.jpg",
        "/CharacterDetails/7": "https://i5.walmartimages.com/asr/0074eeb8-5d9a-490f-bfd8-2ffd861cf572_1.a278b6bc49ca4f43ee46f84dc0487239.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "/CharacterDetails/8": "https://i.pinimg.com/550x/e5/8b/46/e58b469846ef232cbd4c330fe12e34cd.jpg",
        "/CharacterDetails/9": "https://cdn.vox-cdn.com/thumbor/SRwHbaTMxPr4f8EJdfai_UR2y34=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6434955/obi-wan.0.jpg",
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
