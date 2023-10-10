"use client";
import { useState } from "react";

export default function GameplayPage(props) {
  const {
    number,
    roll,
    currentRound,
    maxRounds,
    onIncrement,
    onDouble,
    onNextRoll,
    onNextPlayer,
    onBankPlayers,
    onStartNewRound,
    currentPlayerIndex,
    playersArray,
    gameStarted,
    setPlayersArray,
  } = props;

  return (
    <div className="flex flex-col items-center justify-center w-full p-10 rounded-xl outline-double outline-zinc-300">
      <p className="font-semibold leading-tight">Round: {currentRound}/{maxRounds}</p>

      <p className="pb-1 font-semibold">Roll: {roll}</p>
      <p>{gameStarted && playersArray.length > 0 ? `${playersArray[currentPlayerIndex].name}'s Turn` : "Game not started!"}</p>



      <h1 className="font-semibold text-yellow-500 text-7xl">{number}</h1>
      <p className="pb-2 text-lg font-semibold">Round Total</p>

      <div
        id="row1-buttons"
        className="flex-row items-center justify-center py-2"
      >
        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 2; i++) {
              onIncrement();
            }
            onNextRoll();
            onNextPlayer();
          }}
        >
          +2
        </button>

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 3; i++) {
              onIncrement();
            }
            onNextRoll();
            onNextPlayer();
          }}
        >
          +3
        </button>

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 4; i++) {
              onIncrement();
            }
            onNextRoll();
            onNextPlayer();
          }}
        >
          +4
        </button>

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 5; i++) {
              onIncrement();
            }
            onNextRoll();
            onNextPlayer();
          }}
        >
          +5
        </button>
      </div>

      <div id="row2-buttons" className="flex-row py-2">
        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 6; i++) {
              onIncrement();
            }
            onNextRoll();
            onNextPlayer();
          }}
        >
          +6
        </button>

        <button
          className={`px-4 py-2 mr-1 font-bold text-white rounded-full hover:bg-orange-700 ${
            roll >= 3 ? "bg-cyan-950" : "bg-orange-400"
          }`}
          onClick={() => {
            if (roll >= 3) {
              onStartNewRound();
              onNextPlayer();
            }

            if (roll < 3) {
              for (let i = 0; i < 70; i++) {
                onIncrement();
              }
              onNextRoll();
              onNextPlayer();
            }

            if (roll > 3 && currentRound >= maxRounds - 5) {
              // Create a copy of the players array
              const updatedPlayersArray = [...playersArray];
            
              // Sort the players based on their scores in descending order (highest score first)
              updatedPlayersArray.sort((a, b) => b.score - a.score);
            
              // Find the index of the current player in the sorted array
              const currentPlayerIndexInSortedArray = updatedPlayersArray.findIndex(player => player === playersArray[currentPlayerIndex]);
            
              // Apply the penalty based on the player's rank
              let penaltyPercentage;
              if (currentPlayerIndexInSortedArray === 0) {
                penaltyPercentage = 0.8; // Leading Player: Deduct 80% of the total number
              } else if (currentPlayerIndexInSortedArray === 1) {
                penaltyPercentage = 0.7; // 2nd Place Player: Deduct 70% of the total number
              } else if (currentPlayerIndexInSortedArray === 2) {
                penaltyPercentage = 0.6; // 3rd Place Player: Deduct 60% of the total number
              } else {
                penaltyPercentage = 0.4; // 4th Place or Lower: Deduct 40% of the total number
              }
            
              // Calculate the penalty amount
              const penaltyAmount = penaltyPercentage * number;
            
              // Deduct the penalty amount from the current player's score
              updatedPlayersArray[currentPlayerIndex].score -= penaltyAmount;
            
              // Update the state with the modified array
              setPlayersArray(updatedPlayersArray);
            
              console.log(`Unlucky! ${playersArray[currentPlayerIndex].name} rolled a 7..!
              ${playersArray[currentPlayerIndex].name} is in ${currentPlayerIndexInSortedArray + 1}th place.
              ${penaltyPercentage} of ${number} will be deducted. 
              ${penaltyAmount} points deducted! 
              ${playersArray[currentPlayerIndex].name}'s score is now ${playersArray[currentPlayerIndex].score}!`);
            }
            
          }}
        >
          +7
        </button>

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 8; i++) {
              onIncrement();
            }
            onNextRoll();
            onNextPlayer();
          }}
        >
          +8
        </button>

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 9; i++) {
              onIncrement();
            }
            onNextRoll();
            onNextPlayer();
          }}
        >
          +9
        </button>
      </div>

      <div
        id="row3-buttons"
        className="flex flex-row items-center justify-center py-2"
      >
        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 10; i++) {
              onIncrement();
            }
            onNextRoll();
            onNextPlayer();
          }}
        >
          +10
        </button>

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 11; i++) {
              onIncrement();
            }
            onNextRoll();
            onNextPlayer();
          }}
        >
          +11
        </button>

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 12; i++) {
              onIncrement();
            }
            onNextRoll();
            onNextPlayer();
          }}
        >
          +12
        </button>
      </div>

      <div
        id="row4-buttons"
        className="flex flex-row items-center justify-center pt-3"
      >
        <button
          className="py-2 mr-1 font-bold text-white bg-orange-400 rounded-full px-28 hover:bg-orange-700"
          onClick={() => {
            onDouble();
            onNextRoll();
            onNextPlayer();
          }}
        >
          x2
        </button>
      </div>

      <div
        id="row4-buttons"
        className="flex flex-row items-center justify-center pt-3"
      >
        <button
          className="px-24 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={onBankPlayers}
        >
          Bank!
        </button>
      </div>
    </div>
  );
}

// UI Library for icons like home (controls across bottom of screen)
// Undo Button inside box vs across bottom of screen
// Undo, Redo, Home buttons

// after a player banks, freeze their name and score (mute color or freeze icon)
