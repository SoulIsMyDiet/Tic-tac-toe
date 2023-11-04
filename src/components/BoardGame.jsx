import {useState} from 'react';

const initialBoardgameStructure = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function BoardGame() {
    const [boardgameStructure, setBoardgameStructure] = useState(initialBoardgameStructure);
function handleSelectSquare(rowIndex, colIndex) {
    setBoardgameStructure((prevBoardGameStructure) => {
        const board = [...prevBoardGameStructure.map(innerArray => [...innerArray])];
        board[rowIndex][colIndex] = 'X';
        return board;
    });
}

    return (
        <ol id="game-board">
            {boardgameStructure.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, columnIndex) => (
                            <li key={columnIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, columnIndex)}>{symbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}