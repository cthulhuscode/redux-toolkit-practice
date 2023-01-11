import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className="pokemon">
      <h1>Pokemon App</h1>
      <hr />
      <p>{isLoading && "Loading..."}</p>

      <ul className="pokemon-list">
        {pokemons.map(pokemon => <li key={pokemon.name} >{pokemon.name}</li>)}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))} 
      >Next</button>
    </div>
  )
}
