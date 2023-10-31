const boardgameStructure = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function BoardGame() {
    return (
        <ol id="game-board">
            {boardgameStructure.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, columnIndex) => (
                            <li key={columnIndex}>
                                <button>{symbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}