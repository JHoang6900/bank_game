"use client";
import { playersArray } from "../components/gamecontainer";
import { useState } from "react";

export default function PlayersPage(props) {
  const {
    playersArray,
    newPlayerName,
    onAddPlayer,
    onToggleCheckbox,
    onUpdatePlayerName,
    onRemovePlayer,
    onDebugPlayer
  } = props;

  return (
    <div className="flex flex-col items-center justify-center w-full p-10 mt-5 rounded-xl outline-double outline-zinc-300">
      <h1 className="font-bold">PLAYERS: </h1>

      <ul>
        {playersArray.map((player, index) => (
          <li
            key={index}
            className="flex flex-row p-1.5 border rounded-lg border-zinc-400 m-1"
          >
            <input
              className="mr-2 text-white"
              type="checkbox"
              checked={player.isChecked}
              onChange={() => onToggleCheckbox(index)}
              readOnly={playersArray[index].isBanked}
            />

            <p className="mr-2 text-white">{player.name}</p>
            <p className="ml-2 mr-2 text-orange-200">{player.score}</p>

            <button
              className="px-1 py-0 ml-1 mr-1 font-bold text-white bg-red-700 rounded-xl hover:bg-red-900"
              onClick={onRemovePlayer}
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
          value={newPlayerName}
          onChange={onUpdatePlayerName}
        ></input>

        <button
          className="px-4 py-2 ml-1 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          type="submit"
          onClick={onAddPlayer}
        >
          +
        </button>
      </form>

      <button
        className="px-24 py-2 mr-1 font-bold text-white bg-green-800 rounded-full hover:bg-orange-700"
        onClick={onDebugPlayer}
      >
        Debug!
      </button>
    </div>
  );
}

{
  /* <button
        className="px-24 py-2 mr-1 font-bold text-white bg-green-800 rounded-full hover:bg-orange-700"
        onClick={startGame}
      >
        Start!

      startGame should be a function that hides the setup UI elements. 
      </button> */
}

// once hitting the bank button, a player's isBanked property should be locked to true.
