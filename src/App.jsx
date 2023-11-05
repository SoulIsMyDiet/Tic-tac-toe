import Player from './components/player'
import BoardGame from "./components/BoardGame";
import Log from "./components/Log";
import {useState} from 'react';
function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare(rowIndex, colIndex) {
        setActivePlayer(prevActivePlayer => {
            if(prevActivePlayer === 'X'){
                return 'O';
            } else {
                return 'X';
            }
        });
        setGameTurns(prevTurn => {
                let player = 'X';
                if (prevTurn.length > 0 && prevTurn[0].player === 'X') {
                    player = 'O';
                }
                const gameTurns = [{square: {row: rowIndex, col: colIndex}, player: player},
                    ...prevTurn];

                return gameTurns;
            });
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player isActive={activePlayer === 'X'} name='Player1' symbol='X'/>
                    <Player isActive={activePlayer === 'O'} name='Player2' symbol='O'/>
                </ol>
                <BoardGame selectSquare={handleSelectSquare} gameTurns={gameTurns}/>
            </div>
            <Log gameTurns={gameTurns} />
        </main>
    )
}

export default App
