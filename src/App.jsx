import Player from './components/player'
import BoardGame from "./components/BoardGame";
import {useState} from 'react';
function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function changeActivePlayer() {
        setActivePlayer(prevActivePlayer => {
            if(prevActivePlayer === 'X'){
                return 'O';
            } else {
                return 'X';
            }
        })
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player isActive={activePlayer === 'X'} name='Player1' symbol='X'/>
                    <Player isActive={activePlayer === 'O'} name='Player2' symbol='O'/>
                </ol>
                <BoardGame swapPlayers={changeActivePlayer} symbol={activePlayer}/>
            </div>
            Log
        </main>
    )
}

export default App
