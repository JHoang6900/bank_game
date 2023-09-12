"use client";
import { useState } from 'react';

export default function Counter() {

let [newPlayer, setNewPlayer] = useState("");
const [playersArray, setPlayersArray] = useState([]);

  function addPlayer() {
    event.preventDefault();

    setPlayersArray([...playersArray, newPlayer]);
    setNewPlayer("");

    playersArray.push(newPlayer);
    console.log(playersArray);
  }

  function updatePlayerState(event) {
    setNewPlayer(event.target.value);
  }

  return (
      <div className='flex flex-col items-center justify-center w-full p-10 mt-5 rounded-xl outline-double outline-zinc-300'>
        <h1>PLAYERS: </h1>

        <ul> 

          {playersArray.map((player, index) => (
            <li key={index}>{player}</li>
          ))}

        </ul>


        <form> 
          <input 
          type="text"
          placeholder='Player Name'
          value={newPlayer}
          onChange={updatePlayerState}
          
          ></input>
          
          <button className="px-4 py-2 ml-1 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700" type="submit" onClick={addPlayer}>+</button>

        </form>
        



    </div>
  );
}