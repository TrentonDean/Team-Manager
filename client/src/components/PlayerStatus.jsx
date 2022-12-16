import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const PlayerStatus = (props) => {

    const [players,setPlayers] = useState([])
    const gameId = useParams()                      // it absolutely WOULD NOT take the prop from the link, I don't know why. use Params worked but I had to make every instance of gameId become gameId.gameId

    useEffect(()=>{                                 // gets player list
        axios.get("http://localhost:8000/team")
        .then((res)=>{
            setPlayers(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])

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
            })
            .catch((err) => console.log(err.response));
    };

    return (
        <div>
            <h1>Player Status - Game {gameId.gameId}</h1>
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
                                    ? "green-playing-btn"
                                    : ""
                                }`}
                                onClick={() =>
                                    handleGameStatus(player._id, "Playing")
                                }
                                >Playing</button>
                                <button
                                className={`${
                                    player.gameOneStatus === "Not Playing"
                                    ? "red-not-playing-btn"
                                    : ""
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
                                    ? "yellow-undecided-btn"
                                    : ""
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
                                    ? "green-playing-btn"
                                    : ""
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
                                    ? "red-not-playing-btn"
                                    : ""
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
                                    ? "yellow-undecided-btn"
                                    : ""
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
                                    ? "green-playing-btn"
                                    : ""
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
                                    ? "red-not-playing-btn"
                                    : ""
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
                                    ? "yellow-undecided-btn"
                                    : ""
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