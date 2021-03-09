import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const {id,name,email}=props.friend;
    const history=useHistory();
    const handleDetails=(id)=>{
        const urlPart=`/friend/${id}`;
        history.push(urlPart);
    }
    return (
        <div className="friend-container">
            <h1>Id {id}</h1>
            <h2>{name}</h2>
            <p>{email}</p>
            <button onClick={()=>handleDetails(id)}>Show Details of {id}</button>
            {/* <Link to={`/friend/${id}`}><button>Show Detail of {id}</button></Link> */}
        </div>
    );
};

export default Friend;