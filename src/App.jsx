import Player from './components/player'
import BoardGame from "./components/BoardGame";
import Log from "./components/Log";
import {useState} from 'react';

function deriveActivePlayer(gameTurns) {
    let activePlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        activePlayer = 'O';
    }

    return activePlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurn => {
            let player = 'X';
            if (prevTurn.length > 0 && prevTurn[0].player === 'X') {
                player = 'O';
            }

            return [{square: {row: rowIndex, col: colIndex}, player: player},
                ...prevTurn];

        });
    }

    const activePlayer = deriveActivePlayer(gameTurns);

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player isActive={activePlayer === 'X'} name='Player1' symbol='X'/>
                    <Player isActive={activePlayer === 'O'} name='Player2' symbol='O'/>
                </ol>
                <BoardGame selectSquare={handleSelectSquare} gameTurns={gameTurns}/>
            </div>
            <Log gameTurns={gameTurns}/>
        </main>
    )
}

export default App
