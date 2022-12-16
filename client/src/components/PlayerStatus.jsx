import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const PlayerStatus = (props) => {

    const [players,setPlayers] = useState([])
    const gameId = useParams()                      // it absolutely WOULD NOT take the prop from the link, I don't know why. use Params worked but I had to make every instance of gameId become gameId.gameId
    const [triggerGetAllRequestDummy, setTriggerGetAllRequestDummy] = useState(false);  // THIS is what reloads the player list after the game status is updated


    useEffect(()=>{                                 // gets player list
        axios.get("http://localhost:8000/team")
        .then((res)=>{
            setPlayers(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [triggerGetAllRequestDummy])                 // function is called when trigger is changed

    const handleGameStatus = (playerId, newStatus) => {
        let putData = {};
        if (gameId.gameId === '1') {
            putData.gameOneStatus = newStatus;
        } else if (gameId.gameId === '2') {
            putData.gameTwoStatus = newStatus;
        } else {
            putData.gameThreeStatus = newStatus;
        }
        axios.put(`http://localhost:8000/player/${playerId}`, putData)
            .then((response) => {
            console.log(response);
            setTriggerGetAllRequestDummy(!triggerGetAllRequestDummy);   // calls the useeffect
            })
            .catch((err) => console.log(err.response));
    };

    return (
        <div className="player-list">
            <h1 className="align-self-start">Player Status - Game {gameId.gameId}</h1>
            <h4><Link to={'/status/game/1'} className='link-color'>Game 1</Link> | <Link to={'/status/game/2'} className='link-color'>Game 2</Link> | <Link to={'/status/game/3'} className='link-color'>Game 3</Link></h4>
            <table className="table table-border">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Preferred Position</th>
                        <th>Game Status</th>
                    </tr>
                </thead>
                <tbody>
                {gameId.gameId === "1" ? (
                    players.map((player, index) => {
                    return (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.preferredPosition}</td>
                            <td>
                                <button
                                className={`${
                                    player.gameOneStatus === "Playing"
                                    ? "btn btn-success me-2"
                                    : "btn btn-outline-success me-2"
                                }`}
                                onClick={() =>
                                    handleGameStatus(player._id, "Playing")
                                }
                                >Playing</button>
                                <button
                                className={`${
                                    player.gameOneStatus === "Not Playing"
                                    ? "btn btn-danger me-2"
                                    : "btn btn-outline-danger me-2"
                                }`}
                                onClick={() =>
                                    handleGameStatus(player._id, "Not Playing")
                                }
                                >
                                Not Playing
                                </button>
                                <button
                                className={`${
                                    player.gameOneStatus === "Undecided"
                                    ? "btn btn-warning"
                                    : "btn btn-outline-warning"
                                }`}
                                onClick={() =>
                                    handleGameStatus(player._id, "Undecided")
                                }
                                >
                                Undecided
                                </button>
                            </td>
                        </tr>
                    );
                    })
                ) : (
                    <></>
                )}
                {gameId.gameId === '2' ? (
                    players.map((player, index) => {
                    return (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.preferredPosition}</td>
                            <td>
                                <button
                                className={`${
                                    player.gameTwoStatus === "Playing"
                                    ? "btn btn-success me-2"
                                    : "btn btn-outline-success me-2"
                                }`}
                                onClick={() =>
                                    handleGameStatus(player._id, "Playing")
                                }
                                >
                                Playing
                                </button>
                                <button
                                className={`${
                                    player.gameTwoStatus === "Not Playing"
                                    ? "btn btn-danger me-2"
                                    : "btn btn-outline-danger me-2"
                                }`}
                                onClick={() =>
                                    handleGameStatus(player._id, "Not Playing")
                                }
                                >
                                Not Playing
                                </button>
                                <button
                                className={`${
                                    player.gameTwoStatus === "Undecided"
                                    ? "btn btn-warning"
                                    : "btn btn-outline-warning"
                                }`}
                                onClick={() =>
                                    handleGameStatus(player._id, "Undecided")
                                }
                                >
                                Undecided
                                </button>
                            </td>
                        </tr>
                    );
                    })
                ) : (
                    <></>
                )}
                {gameId.gameId === '3' ? (
                    players.map((player, index) => {
                    return (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.preferredPosition}</td>
                            <td>
                                <button
                                className={`${
                                    player.gameThreeStatus === "Playing"
                                    ? "btn btn-success me-2"
                                    : "btn btn-outline-success me-2"
                                }`}
                                onClick={() =>
                                    handleGameStatus(player._id, "Playing")
                                }
                                >
                                Playing
                                </button>
                                <button
                                className={`${
                                    player.gameThreeStatus === "Not Playing"
                                    ? "btn btn-danger me-2"
                                    : "btn btn-outline-danger me-2"
                                }`}
                                onClick={() =>
                                    handleGameStatus(player._id, "Not Playing")
                                }
                                >
                                Not Playing
                                </button>
                                <button
                                className={`${
                                    player.gameThreeStatus === "Undecided"
                                    ? "btn btn-warning"
                                    : "btn btn-outline-warning"
                                }`}
                                onClick={() =>
                                    handleGameStatus(player._id, "Undecided")
                                }
                                >
                                Undecided
                                </button>
                            </td>
                        </tr>
                    );
                    })
                ) : (
                    <></>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerStatus