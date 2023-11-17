"use client";
import { useState } from "react";

export default function GameplayPage(props) {
  const {
    number,
    roll,
    currentRound,
    maxRounds,
    onIncrement,
    onDecrement,
    onDouble,
    onDivide,
    onNextRoll,
    onPreviousRoll,
    onNextPlayer,
    onPreviousPlayer,
    onBankPlayers,
    onStartNewRound,
    currentPlayerIndex,
    playersArray,
    gameStarted,
    setPlayersArray,
    setCurrentPlayerIndex,
  } = props;

  const [penaltyMessage, setPenaltyMessage] = useState("");

  const [loopNumber, setLoopNumber] = useState(0);
  const [lastButton, setLastButton] = useState("");

  return (
    <div className="relative flex flex-col items-center justify-center w-full p-8 mb-6 rounded-2xl outline-double outline-zinc-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`absolute w-12 h-10 p-2 text-xl font-extrabold bg-orange-400 rounded-full ${
          lastButton === "Undo" ? "text-white pointer-events-none bg-gray-400" : "text-white hover:bg-orange-700"
        } left-5 top-7`}
        id="undo"
        onClick={() => {
          if (lastButton === "plusNumber") {
            for (let j = 0; j < loopNumber + 1; j++) {
              onDecrement();
            }
          }

          if (lastButton === "doubleNumber") {
            onDivide();
          }

          onPreviousRoll();
          onPreviousPlayer();
          setLastButton("Undo");
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="absolute w-12 h-10 p-2 text-xl font-extrabold text-white bg-orange-400 rounded-full hover:bg-orange-700 right-5 top-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
        />
      </svg>

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
                setLoopNumber(i);
              }
              onNextRoll();
              onNextPlayer();

              setPenaltyMessage(
                <div className="flex items-center justify-center text-center text-orange-300">
                  <p></p>
                </div>
              );

              setLastButton("plusNumber");
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
              setLoopNumber(i);
            }
            onNextRoll();
            onNextPlayer();

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );

            setLastButton("plusNumber");
          }}
        >
          +3
        </button>

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 4; i++) {
              onIncrement();
              setLoopNumber(i);
            }
            onNextRoll();
            onNextPlayer();

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );

            setLastButton("plusNumber");
          }}
        >
          +4
        </button>

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 5; i++) {
              onIncrement();
              setLoopNumber(i);
            }
            onNextRoll();
            onNextPlayer();

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );

            setLastButton("plusNumber");
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
              setLoopNumber(i);
            }
            onNextRoll();
            onNextPlayer();

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );

            setLastButton("plusNumber");
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
              let penaltyDecimal;
              if (currentPlayerIndexInSortedArray === 0) {
                penaltyDecimal = 0.8; // Leading Player: Deduct 80% of the total number
              } else if (currentPlayerIndexInSortedArray === 1) {
                penaltyDecimal = 0.7; // 2nd Place Player: Deduct 70% of the total number
              } else if (currentPlayerIndexInSortedArray === 2) {
                penaltyDecimal = 0.6; // 3rd Place Player: Deduct 60% of the total number
              } else {
                penaltyDecimal = 0.4; // 4th Place or Lower: Deduct 40% of the total number
              }

              // Calculate the penalty amount
              const penaltyAmount = Math.round(penaltyDecimal * number);

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
                      Oh no!{" "}
                      {
                        updatedPlayersArray[currentPlayerIndexInSortedArray]
                          .name
                      }{" "}
                      can&apos;t go below 0! 😭
                    </p>
                  </div>
                );
              } else {
                updatedPlayersArray[currentPlayerIndexInSortedArray].score =
                  updatedPlayersArray[currentPlayerIndexInSortedArray].score -
                  penaltyAmount;

                // Update the state with the modified array
                setPlayersArray(updatedPlayersArray);

                const nthNumber = (number) => {
                  if (number > 3 && number < 21) return "th";
                  switch (number % 10) {
                    case 1:
                      return "st";
                    case 2:
                      return "nd";
                    case 3:
                      return "rd";
                    default:
                      return "th";
                  }
                };

                const ordinalSuffix = nthNumber(
                  currentPlayerIndexInSortedArray + 1
                );

                const penaltyPercentage = penaltyDecimal * 100;

                setPenaltyMessage(
                  <div className="flex items-center justify-center text-center text-orange-300">
                    <p>
                      Unlucky!{" "}
                      {
                        updatedPlayersArray[currentPlayerIndexInSortedArray]
                          .name
                      }{" "}
                      rolled a 7! <br />
                      {currentPlayerIndexInSortedArray + 1}
                      {ordinalSuffix} place loses {penaltyPercentage}% of{" "}
                      {number}. (-{penaltyAmount} points!! 😱)
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
                setLoopNumber(i);
                setLastButton("plusNumber");
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
              setLoopNumber(i);
            }
            onNextRoll();
            onNextPlayer();

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );

            setLastButton("plusNumber");
          }}
        >
          +8
        </button>

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 9; i++) {
              onIncrement();
              setLoopNumber(i);
            }
            onNextRoll();
            onNextPlayer();

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );

            setLastButton("plusNumber");
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
              setLoopNumber(i);
            }
            onNextRoll();
            onNextPlayer();

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );

            setLastButton("plusNumber");
          }}
        >
          +10
        </button>

        <button
          className="px-4 py-2 mr-1 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-700"
          onClick={() => {
            for (let i = 0; i < 11; i++) {
              onIncrement();
              setLoopNumber(i);
            }
            onNextRoll();
            onNextPlayer();

            setPenaltyMessage(
              <div className="flex items-center justify-center text-center text-orange-300">
                <p></p>
              </div>
            );
            setLastButton("plusNumber");
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
                setLoopNumber(i);
              }
              onNextRoll();
              onNextPlayer();

              setPenaltyMessage(
                <div className="flex items-center justify-center text-center text-orange-300">
                  <p></p>
                </div>
              );
              setLastButton("plusNumber");
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

            setLastButton("doubleNumber");
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
