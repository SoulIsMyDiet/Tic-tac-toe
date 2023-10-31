import {useState} from 'react';
export default function player({name, symbol}) {
    const [editing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    function handleEditing() {
        setEditing((editing) => !editing);
    }

    function handlePlayerName(event) {
        setPlayerName(event.target.value);
    }

    let playerNameTag = <span className="player-name">{playerName}</span>

    if(editing){
        playerNameTag = <input type='text' required value={playerName} onChange={handlePlayerName}></input>
    }
    return  <li>
              <span className="player">
                  {playerNameTag}
            <span className="player-symbol">{symbol}</span>
              </span>
        <button onClick={handleEditing}>{editing ?'Save' :'Edit'}</button>
    </li>
}