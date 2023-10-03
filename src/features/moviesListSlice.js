import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMovies: [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      description:
        "A thief who enters people's dreams and steals their secrets.",
      poster: `https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg?20170322172828`,
      collected: false,
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      year: 1994,
      collected: false,
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      poster: `https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg`,
    },
    {
      id: 3,
      title: "The Godfather",
      year: 1972,
      collected: false,
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorEN8Pc_vCRwReNgxzESjoweZIRcue-76JwX2YfRZZbvzlSpRRR1GURpo2zRvuyTlBUs&usqp=CAU",
    },
    {
      id: 4,
      title: "Pulp Fiction",
      year: 1994,
      collected: false,
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    },
    {
      id: 5,
      title: "The Dark Knight",
      year: 2008,
      collected: false,
      description:
        "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    },
    {
      id: 6,
      title: "Forrest Gump",
      year: 1994,
      collected: false,
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg",
    },
    {
      id: 7,
      title: "Schindler's List",
      year: 1993,
      collected: false,
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
    },
    {
      id: 8,
      title: "The Matrix",
      year: 1999,
      collected: false,
      description:
        "A computer programmer discovers that reality as he knows it is a simulation created by machines to subdue humanity.",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
    },
    {
      id: 9,
      title: "Gladiator",
      year: 2000,
      collected: false,
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Gladiator_%282000_film_poster%29.png/220px-Gladiator_%282000_film_poster%29.png",
    },
    {
      id: 10,
      title: "The Silence of the Lambs",
      year: 1991,
      collected: false,
      description:
        "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
    },
  ],
  collectedMovies: [],
};

export const moviesListSlice = createSlice({
  name: "movies-list",
  initialState,
  reducers: {
    // handleWatchListMovie: (state, action) => {
    //   state.allMovies = state.allMovies.map((movie) =>
    //     movie.id === action.payload.id
    //       ? { ...movie, collected: action.payload.isCollected }
    //       : movie
    //   );
    // },
    addToWatchList: (state, action) => {
      state.allMovies = state.allMovies.map((movie) =>
        movie.id === action.payload ? { ...movie, collected: true } : movie
      );
    },
    removeFromWatchList: (state, action) => {
      state.allMovies = state.allMovies.map((movie) =>
        movie.id === action.payload ? { ...movie, collected: false } : movie
      );
    },
  },
});

export const { addToWatchList, removeFromWatchList, handleWatchListMovie } =
  moviesListSlice.actions;
export const moviesListReducer = moviesListSlice.reducer;
