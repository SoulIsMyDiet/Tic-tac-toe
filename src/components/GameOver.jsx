export default function GameOver({winner, selectRematch}){
    return <div id="game-over">
        <h2>Game over</h2>
        {winner && <p>Congratz {winner} won</p>}
        {!winner && <p>Its a draw</p>}
        <p>
            <button onClick={selectRematch}>Rematch</button>
        </p>
    </div>
}