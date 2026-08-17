import { useState, useEffect } from "react";

const pokemonOptions = ["pikachu", "bulbasaur", "charmander", "squirtle"];

export default function App() {
  const [pokemonName, setPokemonName] = useState("pikachu");
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [pokemonName]
  );
  return (<div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
    <div className="flex gap-3 py-6">{pokemonOptions.map((name) => (
      <button className={`rounded px-4 text-sm font-semibold ${(
        pokemonName === name)
        ? "bg-teal-300 text-slate-950"
        : "bg-slate-800 text-slate-100 hover:bg-slate-700"
        }`}
        key={name} onClick={() => setPokemonName(name)} type="button" >{name}</button>
    ))}

    </div>
    <div className="rounded border border-slate-700 bg-slate-900 p-6">
      {pokemon && (
        <div className="flex aspect-square items-center justify-center rounded bg-slate-800">
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        </div>
      )}
    </div>
  </div>);
}