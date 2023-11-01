"use client";

export default function PlayersPage(props) {
  const {
    gameStarted,
    gameEnded,
    playersArray,
    newPlayerName,
    onAddPlayer,
    onToggleCheckbox,
    onUpdatePlayerName,
    onRemovePlayer,
    onHandleStartGame,
    onDebugPlayer,
    maxRounds,
    onSetMaxRounds,
    highestScore,
  } = props;




  return (
    <div className="flex flex-col items-center justify-center w-full p-2 rounded-xl outline-double outline-zinc-300">
      <h1 className="font-bold">PLAYERS: </h1>

      <ul>
        {playersArray?.map((player, index) => (
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

            {gameEnded && player.score === highestScore && (
              <span role="img" aria-label="trophy" className="text-orange-200">
                🏆
              </span>
            )}

            {!gameStarted && (
              <button
                className="px-1 py-0 ml-1 mr-1 font-bold text-white bg-red-700 rounded-xl hover:bg-red-900"
                onClick={() => onRemovePlayer(index)}
              >
                -
              </button>
            )}
          </li>
        ))}
      </ul>

      {!gameStarted && (
        <div id="maxRoundGroup" className="my-4">
          <label className="inline-flex items-center mr-6">
            <input
              className="mr-1 text-white"
              type="radio"
              value={10}
              checked={maxRounds === 10}
              onChange={() => onSetMaxRounds(10)}
            />
            <span className="text-white">10 Rounds</span>
          </label>

          <label className="inline-flex items-center mr-6">
            <input
              className="mr-1 text-white"
              type="radio"
              value={15}
              checked={maxRounds === 15}
              onChange={() => onSetMaxRounds(15)}
            />
            <span className="text-white">15 Rounds</span>
          </label>

          <label className="inline-flex items-center">
            <input
              className="mr-1 text-white "
              type="radio"
              value={20}
              checked={maxRounds === 20}
              onChange={() => onSetMaxRounds(20)}
            />
            <span className="text-white">20 Rounds</span>
          </label>
        </div>
      )}

      {!gameStarted && (
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
      )}

      {!gameStarted && (
        <button
          className="px-24 py-2 mr-1 font-bold text-white bg-green-800 rounded-full hover:bg-orange-700"
          onClick={onHandleStartGame}
        >
          Start!
        </button>
      )}

      <button
        className="px-24 py-2 mt-1 mr-1 font-bold text-white bg-green-800 rounded-full hover:bg-orange-700"
        onClick={onDebugPlayer}
      >
        Debug!
      </button>
    </div>
  );
}

// switch font color to black when radio is checked in maxRoundGroup.
