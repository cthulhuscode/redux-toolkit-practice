import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  /**
   * - getState: used to obtain the root state.
   * We can use it for example to check if user
   * is authenticated...
   * - dispatch is used to execute another function
   */
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // Make HTTP request
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
