import Player from './components/player'

function App() {


    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name='Player1' symbol='X'/>
                    <Player name='Player2' symbol='O'/>
                </ol>
                Game board
            </div>
            Log
        </main>
    )
}

export default App
