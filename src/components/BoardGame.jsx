import {useState} from 'react';

export default function BoardGame({selectSquare, boardgameStructure}) {
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