// components/GameContainer.jsx
"use client";
import React, { useState, useEffect } from "react";
import PlayersPage from "../players/page";
import GameplayPage from "../gameplay/page";

export default function GameContainer() {
  // State for managing players and other shared state
  const [playersArray, setPlayersArray] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [number, setNumber] = useState(0);
  const [roll, setRoll] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [maxRounds, setMaxRounds] = useState(10);

  const [shouldStartNewRound, setShouldStartNewRound] = useState(false);

  const [gameStarted, setGameStarted] = useState(false);

  const [gameEnded, setGameEnded] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
    console.log("Game start!");
  };

  const handleEndGame = () => {
    setGameEnded(true);
    setGameStarted(false);
    setCurrentRound(0);
    setRoll(0);
    setNumber(0);
    console.log("Game end!");
  };

  const handleSetMaxRounds = (value) => {
    setMaxRounds(value);
  };

  // Function to add a new player
  function addPlayer() {
    event.preventDefault();
    if (newPlayerName.trim() !== "") {
      const newPlayer = {
        name: newPlayerName,
        score: 0,
        isChecked: false,
        hasBanked: false,
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

  function nextRoll() {
    setRoll((a) => a + 1);
  }

  function roundIncrement() {
    setCurrentRound((a) => a + 1);
  }

  function bankPlayers() {
    const updatedPlayersArray = playersArray.map((player) => {
      if (player.isChecked && !player.hasBanked) {
        return { ...player, score: player.score + number, hasBanked: true };
      }
      return player;
    });

    setPlayersArray(updatedPlayersArray);
    console.log("Players banked!");
  }

  function updatePlayerName(event) {
    setNewPlayerName(event.target.value);
  }

  function removePlayer(index) {
    if (index >= 0 && playersArray.length > 0 && index < playersArray.length) {
      event.preventDefault();

      const updatedPlayersArray = [...playersArray]; // create a new copy of the array
      updatedPlayersArray.splice(index, 1); // remove the item at the index
      setPlayersArray(updatedPlayersArray); // update the state with the modified array

      console.log("player removed!", playersArray);
    }
  }

  function toggleCheckbox(index) {
    if (index >= 0 && index < playersArray.length) {
      if (!playersArray[index].hasBanked) {
        const updatedPlayersArray = [...playersArray];
        updatedPlayersArray[index].isChecked =
          !updatedPlayersArray[index].isChecked;
        setPlayersArray(updatedPlayersArray);
      }
    }
  }

  function startNewRound() {
    setNumber(0);
    setRoll(0);
    roundIncrement();
    console.log("New Round Started!");

    const updatedPlayersArray = playersArray.map((player) => {
      return { ...player, hasBanked: false, isChecked: false };
    });

    setPlayersArray(updatedPlayersArray);
  }

  function allPlayersBanked() {
    if (playersArray.every((player) => player.hasBanked === true)) {
      startNewRound();
      console.log("All players banked! New round started!");
    }
  }

  function debugPlayer() {
    console.log("playersArray ~>", playersArray);
  }

  useEffect(() => {
    if (
      playersArray.length >= 1 &&
      playersArray.every((player) => player.hasBanked === true)
    ) {
      setShouldStartNewRound(true);
    } else {
      setShouldStartNewRound(false);
    }
  }, [playersArray]);

  useEffect(() => {
    if (shouldStartNewRound) {
      startNewRound();
      console.log("All players banked! New round started!");
    }
  }, [shouldStartNewRound]);

  useEffect(() => {
    if (currentRound > maxRounds) {
      handleEndGame();
      console.log("Rounds are finished. Game over!");
    }
  }, [currentRound]);

  return (
    <div>
      <GameplayPage
        number={number}
        roll={roll}
        currentRound={currentRound}
        maxRounds={maxRounds}
        onIncrement={increment}
        onNextRoll={nextRoll}
        onDouble={double}
        onBankPlayers={bankPlayers}
        onStartNewRound={startNewRound}
      />

      <PlayersPage
        playersArray={playersArray}
        newPlayerName={newPlayerName}
        gameStarted={gameStarted}
        onAddPlayer={addPlayer}
        onToggleCheckbox={toggleCheckbox}
        onUpdatePlayerName={updatePlayerName}
        onRemovePlayer={removePlayer}
        onHandleStartGame={handleStartGame}
        maxRounds={maxRounds}
        onSetMaxRounds={handleSetMaxRounds}
        onDebugPlayer={debugPlayer}
      />
    </div>
  );
}
