import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./apis";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon";

// Create store
export const store = configureStore({
  // Similar to combine reducers
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
