import React, {useState} from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const AddPlayer = (props) => {

    const [name,setName] = useState("")
    const [preferredPosition, setPreferredPosition] = useState("")

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {

        e.preventDefault()

        axios.post(`http://localhost:8000/player`, {name, preferredPosition} )
            .then(res=>{
                console.log(res);                         
                setName("")
                setPreferredPosition("")
                navigate("/players/list")
            })
            .catch((err)=>{
                console.log(err)
                setErrors(err.response.data.err.errors) 
            })
    }

    return (
        <form className="col-6 mt-5 new-author" onSubmit={onSubmitHandler}>
            <h1 className="align-self-start mt-2 mb-3"><Link to={'/players/list'} className='link-color'>List</Link> | <Link to={'/players/addplayer'} className='link-color'>Add Player</Link></h1>
            <div className="player-form">
                <p>Add a new Player:</p>
                <div>
                    <div className="form-floating mb-3">
                        <input className="form-control" placeholder="Name" name="name" value={name} onChange = {(e) => setName(e.target.value)}/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" placeholder="PreferredPosition" name="preferredPosition" value={preferredPosition} onChange = {(e) => setPreferredPosition(e.target.value)}/>
                        <label htmlFor="preferredPosition">Preferred Position</label>
                    </div>
                    {errors.name ? <p className="red-text">{errors.name.message}</p> : null}
                    {errors.preferredPosition ? <p className="red-text">{errors.preferredPosition.message}</p> : null }
                    <button className="btn btn-success" type="button submit">Submit</button>
                </div>
            </div>
        </form>
    )

}

export default AddPlayer