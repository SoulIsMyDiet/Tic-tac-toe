export default function GameOver({winner}){
    return <div id="game-over">
        <h2>Game over</h2>
        {winner && <p>Congratz {winner} won</p>}
        {!winner && <p>Its a draw</p>}
        <p>
            <button>Rematch</button>
        </p>
    </div>
}