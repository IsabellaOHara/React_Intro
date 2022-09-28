import { useState } from 'react';
import AddGamers from './addGamers';
import GameRoom from './gameRoom';


const Game = () => {

    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]); 

    const newPlayer = ({target}) => {
        setPlayerName(target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
    }

    const handleAdd = () => {
        setPlayers( players => [...players, playerName]);
    }

    return (
        <>
            <AddGamers newPlayer={newPlayer} submitHandler={submitForm} handleAdd={handleAdd}/>
            <GameRoom players={players}/>
        </>
    );

}

export default Game;