"use client";
import { useState } from "react";

export default function Counter() {
  let [newPlayer, setNewPlayer] = useState("");
  const [playersArray, setPlayersArray] = useState([]);

  function addPlayer() {
    event.preventDefault();

    setPlayersArray([...playersArray, newPlayer]);
    setNewPlayer("");

    playersArray.push(newPlayer);
    console.log("player Added!", playersArray);
  }

  function updatePlayerState(event) {
    setNewPlayer(event.target.value);
  }

  function removePlayer() {
    if (playersArray.length > 0) {
      event.preventDefault();
      const updatedPlayersArray = [...playersArray]; // create a new copy of the array
      updatedPlayersArray.pop(); // removes the last item from the copy array
      setPlayersArray(updatedPlayersArray); // update the state with the modified array
      console.log("player removed!", playersArray);
      // this is important to do to follow best practices of react to not mutate states directly
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-10 mt-5 rounded-xl outline-double outline-zinc-300">
      <h1 className="font-bold">PLAYERS: </h1>

      <ul>
        {playersArray.map((player, index) => (
          <li key={index}>
            {" "}
            {player}
            <button
              className="px-1 py-0 ml-1 mr-1 font-bold text-white bg-red-700 rounded-xl hover:bg-red-900"
              onClick={removePlayer}
            >
              -
            </button>
          </li>
        ))}
      </ul>

      <form>
        <input
          type="text"
          placeholder="Player Name"
          value={newPlayer}
          onChange={updatePlayerState}
        ></input>

        <button
          className="px-4 py-2 ml-1 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          type="submit"
          onClick={addPlayer}
        >
          +
        </button>
      </form>
    </div>
  );
}
