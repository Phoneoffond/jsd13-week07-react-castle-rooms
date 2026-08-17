import { useState, useEffect } from "react";
import Castle from "./components/01_Castle.jsx";


const pokemonTeam = [
  "pikachu",
  "bulbasaur",
  "charmander",
  "squirtle",
];

export default function App() {
  // =========================
  // Message
  // =========================
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  // =========================
  // Pokemon
  // =========================
  const [pokemonName, setPokemonName] = useState("pikachu");
  const [pokemon, setPokemon] = useState(null);
  const [prisoner, setPrisoner] = useState(null);
  useEffect(() => {
    async function fetchPokemon() {
      try {
        // Pokemon หลัก
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );

        const data = await response.json();

        // Pokemon แบบสุ่ม
        const randomID = Math.floor(Math.random() * 1025) + 1;

        const randomResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomID}`
        );

        const randomData = await randomResponse.json();

        console.log("Pokemon หลัก:", data);
        console.log("Pokemon สุ่ม:", randomData);

        // แสดง Pokemon หลัก
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    }

    fetchPokemon();
  }, [pokemonName]);

   useEffect(() => {
    async function fetchRandomPokemon() {
      try {
        // สุ่มเลข Pokemon 1 - 1025
        const randomID = Math.floor(Math.random() * 1025) + 1;

        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomID}`
        );

        const data = await response.json();

        setPrisoner(data);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    }

    fetchRandomPokemon();
  }, []);

  // =========================
  // UI
  // =========================
  return (
    <div className="min-h-screen bg-gray-800 text-white">

      {/* Outside the Castle */}
      <div className="flex flex-col items-center pt-10 gap-y-4">

        {/* Title */}
        <h1 className="text-yellow-400 text-2xl font-bold">
          Outside the Castle
        </h1>

        {/* Pokemon outside */}
        <p className="text-gray-400">
          Pokemon outside:
        </p>

        {/* Pokemon */}
        {pokemon && (
          <div className="flex flex-col items-center">

            <img
              className="w-20 h-20"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />

            <p className="text-sm capitalize">
              {pokemon.name}
            </p>

          </div>
        )}

        {/* Message to Secret Room */}
        <p className="text-purple-300 mt-4">
          Message to the Secret Room:{" "}
          <span className="text-yellow-400">
            {question
              ? question
              : "Waiting..."}
          </span>
        </p>

        {/* Textarea */}
        <textarea
          className="bg-white text-black rounded px-2 py-1"
          placeholder="Type your message here..."
          value={question}
          onChange={handleQuestion}
        />

        {/* Reply */}
        <p className="text-green-400">
          Reply from the Secret Room:{" "}
          <span className="text-yellow-400">
            {answer
              ? answer
              : "Waiting for a reply..."}
          </span>
        </p>

       

        {/* Castle Component */}
        <Castle
          question={question}
          answer={answer}
          handleAnswer={handleAnswer}
          prisoner={prisoner}
        />

      </div>

    </div>
  );
}