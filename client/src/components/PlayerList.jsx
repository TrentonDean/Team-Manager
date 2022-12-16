import React, {useEffect,useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const PlayerList = (props) => {

    const [players,setPlayers] = useState([])

    useEffect(()=>{                                 // grabs all our players and sets them in state
        axios.get("http://localhost:8000/team")
        .then((res)=>{
            setPlayers(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    })

    const handleDeletePlayer = (id) => {
        axios.delete(`http://localhost:8000/player/${id}`)
                .then((response) => {
                console.log("success deleting player");
                console.log(response);
            const filteredPlayers = players.filter((player) => {        // this is the removeFromDom
                return player._id !== id;
            });
            setPlayers(filteredPlayers);
            })
            .catch((err) => {
                console.log("error deleting player", err.response);
            })
    }

    return (
        <div>
            <div className="player-list">
                <h1 className="align-self-start mt-2 mb-3"><Link to={'/players/list'} className='link-color'>List</Link> | <Link to={'/players/addplayer'} className='link-color'>Add Player</Link></h1>
                <table className="table table-border">
                    <thead>
                        <tr>
                            <th scope="col">Player</th>
                            <th scope="col">Preferred Position</th>
                            <th scope="col">Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map((player,index) => {
                                return (
                                    <tr key={player._id}>
                                        <td className="align-middle">{player.name}</td>
                                        <td className="align-middle">{player.preferredPosition}</td>
                                        <td><button className="btn btn-danger" onClick={(e)=>{handleDeletePlayer(player._id)}} >Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlayerList