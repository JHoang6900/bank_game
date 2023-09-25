// components/GameContainer.jsx
"use client";
import React, { useState } from "react";
import PlayersPage from "../players/page";
import GameplayPage from "../gameplay/page";

export default function GameContainer() {
  // State for managing players and other shared state
  const [playersArray, setPlayersArray] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [number, setNumber] = useState(0);

  // Function to add a new player
  function addPlayer() 
  {
    event.preventDefault();
    if (newPlayerName.trim() !== "") {
      const newPlayer = {
        name: newPlayerName,
        score: 0,
        isChecked: false,
        isBanked: false,
      };
      setPlayersArray([...playersArray, newPlayer]);
      setNewPlayerName("");
      console.log("Player added!");
    }
  }

  // Function to increment the number
  function increment() {
    setNumber((a) => a + 1);
  }

  // Function to double the number
  function double() {
    setNumber((a) => a * 2);
  }

  function bankPlayers() {
    const updatedPlayersArray = playersArray.map((player) => {
      if (player.isChecked) {
        return { ...player, isBanked: true };
      }
      return player;
    });
    setPlayersArray(updatedPlayersArray);
    console.log("Players banked!");
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

  function toggleCheckbox(index) {
    if (index >= 0 && index < playersArray.length) {
      if(!playersArray[index].isBanked){
      const updatedPlayersArray = [...playersArray];
      updatedPlayersArray[index].isChecked = !updatedPlayersArray[index].isChecked;
      setPlayersArray(updatedPlayersArray);
    }
  }
}
  

  function debugPlayer() {
    console.log("playersArray ~>", playersArray);
  }

  return (
    <div>
      <GameplayPage
        number={number}
        onIncrement={increment}
        onDouble={double}
        onBankPlayers={bankPlayers}
      />

      <PlayersPage
        playersArray={playersArray}
        newPlayerName={newPlayerName}
        onAddPlayer={addPlayer}
        onToggleCheckbox={toggleCheckbox}
        onUpdatePlayerName={updatePlayerName}
        onRemovePlayer={removePlayer}
        onDebugPlayer={debugPlayer}
      />
    </div>
  );
}
