import {useState} from 'react';
export default function player({name, symbol}) {
    const [editing, setEditing] = useState(false);
    function handleEditing() {
        setEditing(true);
    }

    let playerName = <span className="player-name">{name}</span>

    if(editing){
        playerName = <input type='text' required></input>
    }
    return  <li>
              <span className="player">
                  {playerName}
            <span className="player-symbol">{symbol}</span>
              </span>
        <button onClick={handleEditing}>Edit</button>
    </li>
}