import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon";

// Create store
export const store = configureStore({
  // Similar to combine reducers
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
});
