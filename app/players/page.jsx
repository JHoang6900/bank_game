"use client";
import { useState } from "react";

export default function Counter() {
  const [playersArray, setPlayersArray] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");

 

  function addPlayer() {
    event.preventDefault();

    if(newPlayerName.trim() !== "") {

    const newPlayer = { name: newPlayerName, score: 0 };

    setPlayersArray([...playersArray, newPlayer]);
    

    // playersArray.push(newPlayerName);
    setNewPlayerName("");
    console.log("player Added!");
  }
}

  function updatePlayerName(event) {
    setNewPlayerName(event.target.value);
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

  function debugPlayer() {
    console.log('playersArray ~>',playersArray);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-10 mt-5 rounded-xl outline-double outline-zinc-300">
      <h1 className="font-bold">PLAYERS: </h1>

      <ul>
      {playersArray.map((player, index) => (
        <li key={index} className="flex flex-row p-1.5 border rounded-lg border-zinc-400 m-1">
          <p className="mr-2 text-white">{player.name}</p>
          <p className="ml-2 mr-2 text-orange-200">{player.score}</p>

          <button
            className="px-1 py-0 ml-1 mr-1 font-bold text-white bg-red-700 rounded-xl hover:bg-red-900"
            onClick={removePlayer}>-</button>
            
        </li>
         ))}
      </ul>

     

      <form>
        <input
          type="text"
          placeholder="Player Name"
          value={newPlayerName}
          onChange={updatePlayerName}
        ></input>

        <button
          className="px-4 py-2 ml-1 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          type="submit"
          onClick={addPlayer}
        >
          +
        </button>
      </form>


      {/* <button
        className="px-24 py-2 mr-1 font-bold text-white bg-green-800 rounded-full hover:bg-orange-700"
        onClick={startGame}
      >
        Start!

      startGame should be a function that hides the setup UI elements. 
      </button> */}


      <button
        className="px-24 py-2 mr-1 font-bold text-white bg-green-800 rounded-full hover:bg-orange-700"
        onClick={debugPlayer}
      >
        Debug!
      </button>
    </div>
  );
}
