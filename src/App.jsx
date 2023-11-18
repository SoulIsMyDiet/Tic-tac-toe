import Player from './components/player'
import BoardGame from "./components/BoardGame";
import Log from "./components/Log";
import {useState} from 'react';
import GameOver from "./components/GameOver";

const player1 = 'Player1';
const player2 = 'Player2';

const initialBoardgameStructure = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
const symbols = ['X', 'O'];
const diagonals = [
    [
    {row: 0, column: 0},
    {row: 1, column: 1},
    {row: 2, column: 2},
        ],
    [
    {row: 0, column: 2},
    {row: 1, column: 1},
    {row: 2, column: 0},
        ]
];
function returnWinningSymbol(gameTurns, boardgameStructure) {
    for (let i = 0; i <= 2; i++) {
        for (let symbol of symbols) {

            const col = gameTurns.filter(row => {
                return (row.square.col === i && row.player === symbol);
            });
            const row = gameTurns.filter(row => {
                return (row.square.row === i && row.player === symbol);
            });
            if (row.length === 3 || col.length === 3) {
                return symbol;
            }


        }
    }
    for (let diagonal of diagonals){
        const firstSymbol = boardgameStructure[diagonal[0].row][diagonal[0].column];
        const secondSymbol = boardgameStructure[diagonal[1].row][diagonal[1].column];
        const thirdSymbol = boardgameStructure[diagonal[2].row][diagonal[2].column];
        if(firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol){
            return firstSymbol;
        }
    }

    return null;
}

function deriveActivePlayer(gameTurns) {
    let activePlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        activePlayer = 'O';
    }

    return activePlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [players, setPlayers] = useState({
        'X': player1,
        'O': player2
    });

    function handleChangePlayerName(symbol, playerName) {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: playerName
            }
        })
    }
console.log(players);
    function handleSelectRematch() {
        setGameTurns([]);
    }
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

    let boardgameStructure = [...initialBoardgameStructure.map(innerArray => [...innerArray])];
    for (const turn of gameTurns) {
        let {square, player} = turn;
        let {row, col} = square;
        boardgameStructure[row][col] = player;
    }
    const winnerSymbol = returnWinningSymbol(gameTurns, boardgameStructure);
    const hasDraw = !winnerSymbol && gameTurns.length === 9;
    const winnerName = players[winnerSymbol];
    const activePlayer = deriveActivePlayer(gameTurns);

    return (
        <main>
            <div id="game-container">
                {(winnerSymbol || hasDraw) && <GameOver winner={winnerName} selectRematch={handleSelectRematch}/>}
                <ol id="players" className="highlight-player">
                    <Player isActive={activePlayer === 'X'} name={player1} symbol='X' changePlayerName={handleChangePlayerName}/>
                    <Player isActive={activePlayer === 'O'} name={player2} symbol='O' changePlayerName={handleChangePlayerName}/>
                </ol>
                <BoardGame selectSquare={handleSelectSquare} boardgameStructure={boardgameStructure}/>
            </div>
            <Log gameTurns={gameTurns}/>
        </main>
    )
}

export default App
