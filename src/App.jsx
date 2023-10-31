import Player from './components/player'
import BoardGame from "./components/BoardGame";

function App() {


    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name='Player1' symbol='X'/>
                    <Player name='Player2' symbol='O'/>
                </ol>
                <BoardGame/>
            </div>
            Log
        </main>
    )
}

export default App
