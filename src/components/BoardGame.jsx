import {useState} from 'react';

const initialBoardgameStructure = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function BoardGame({selectSquare, gameTurns}) {
    let boardgameStructure = initialBoardgameStructure;
    for (const turn of gameTurns){
        let {square, player} = turn;
        let {row, col } = square;
        boardgameStructure[row][col] = player;
    }
    return (
        <ol id="game-board">
            {boardgameStructure.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, columnIndex) => (
                            <li key={columnIndex}>
                                <button onClick={() => selectSquare(rowIndex, columnIndex)} disabled={symbol !== null}>
                                    {symbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}