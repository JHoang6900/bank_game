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
    setCurrentPlayerIndex,
  } = props;

  const [penaltyMessage, setPenaltyMessage] = useState("");

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 mb-6 rounded-2xl outline-double outline-zinc-400">
      <p className="font-semibold leading-tight">
        Round: {currentRound}/{maxRounds}
      </p>

      <p className="pb-1 font-semibold">Roll: {roll}</p>
      {/* <p>{gameStarted && playersArray.length > 0 ? `${playersArray[currentPlayerIndex].name}'s Turn` : "Game not started!"}</p> */}
      <p className="pb-1 font-semibold">
        {gameStarted && playersArray.length > 0
          ? `${playersArray[currentPlayerIndex].name}'s Turn`
          : "Game not started!"}
      </p>

      <div className="flex items-center justify-center">{penaltyMessage}</div>

      <h1 className="font-semibold text-yellow-500 text-7xl">{number}</h1>
      <p className="pb-2 text-lg font-semibold">Round Total</p>

      <div
        id="row1-buttons"
        className="flex-row items-center justify-center py-2"
      >
        {roll < 1 && (
          <button
            className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
            onClick={() => {
              for (let i = 0; i < 2; i++) {
                onIncrement();
              }
              onNextRoll();
              onNextPlayer();

              setPenaltyMessage(
                <div className="flex items-center justify-center text-center text-orange-300">
                  <p></p>
                </div>
              );
            }}
          >
            +2
          </button>
        )}

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 3; i++) {
              onIncrement();
            }
            onNextRoll();
            onNextPlayer();

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );
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

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );
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

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );
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

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );
          }}
        >
          +6
        </button>

        <button
          className={`px-4 py-2 mr-1 font-bold text-white rounded-full hover:bg-orange-700 ${
            roll >= 3 ? "bg-cyan-950" : "bg-orange-400"
          }`}
          onClick={() => {
            if (roll >= 3 && currentRound >= maxRounds - 5) {
              //penalized rounds ruleset
              // Create a copy of the players array
              const updatedPlayersArray = [...playersArray];

              // Sort the players based on their scores in descending order (highest score first)
              updatedPlayersArray.sort((a, b) => b.score - a.score);

              // Find the index of the current player in the sorted array
              const currentPlayerIndexInSortedArray =
                updatedPlayersArray.findIndex(
                  (player) => player === playersArray[currentPlayerIndex]
                );

              // Update currentPlayerIndex to the new index in the sorted array
              setCurrentPlayerIndex(currentPlayerIndexInSortedArray);

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
              const penaltyAmount = Math.round(penaltyPercentage * number);

              // Deduct the penalty amount from the current player's score
              if (
                updatedPlayersArray[currentPlayerIndexInSortedArray].score -
                  penaltyAmount <
                0
              ) {
                updatedPlayersArray[currentPlayerIndexInSortedArray].score = 0;

                setPenaltyMessage(
                  <div className="flex items-center justify-center text-center text-orange-300">
                    <p>
                      {" "}
                      Oh no!{" "}
                      {
                        updatedPlayersArray[currentPlayerIndexInSortedArray]
                          .name
                      }{" "}
                      cannot go below 0!{" "}
                    </p>
                  </div>
                );
              } else {
                updatedPlayersArray[currentPlayerIndexInSortedArray].score =
                  updatedPlayersArray[currentPlayerIndexInSortedArray].score -
                  penaltyAmount;

                // Update the state with the modified array
                setPlayersArray(updatedPlayersArray);

                setPenaltyMessage(
                  <div className="flex items-center justify-center text-center text-orange-300">
                    <p>
                      {" "}
                      Unlucky!{" "}
                      {
                        updatedPlayersArray[currentPlayerIndexInSortedArray]
                          .name
                      }{" "}
                      rolled a 7! <br />
                      {currentPlayerIndexInSortedArray + 1}th place loses{" "}
                      {penaltyPercentage} of {number}. (-{penaltyAmount}{" "}
                      points!! 😱){" "}
                    </p>
                  </div>
                );

                console.log("penaltyMessage ~>", penaltyMessage);
              }
            }

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

              setPenaltyMessage(
                <div className="flex items-center justify-center text-center text-orange-300">
                  <p></p>
                </div>
              );
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

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );
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

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );
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

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );
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

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );
          }}
        >
          +11
        </button>

        {roll < 1 && (
          <button
            className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
            onClick={() => {
              for (let i = 0; i < 12; i++) {
                onIncrement();
              }
              onNextRoll();
              onNextPlayer();

              setPenaltyMessage(
                <div className="flex items-center justify-center text-center text-orange-300">
                  <p></p>
                </div>
              );
            }}
          >
            +12
          </button>
        )}
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

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );
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

// after a player banks, change background color to orange.

// done:
// after banking type player out of roll index
// fixed negative scores
