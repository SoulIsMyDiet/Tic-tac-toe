export default function Log({gameTurns}){
    return <ol id="log">
        {gameTurns.map(turn => {
            return <li key={`${turn.square.col}${turn.square.row}`}>{turn.player} selected {turn.square.row+' '+turn.square.col}</li>
        })
        }
    </ol>
}