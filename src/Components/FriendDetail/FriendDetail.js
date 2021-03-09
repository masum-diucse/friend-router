import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId}=useParams();
    const [friendDetails,setFriendDetails]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriendDetails(data));
    },[])
    const {name,email,website,phone}=friendDetails;
    return (
        <div className="friend-container">
            <h1>{name}</h1>
            <h4>{email}</h4>
            <h5>{phone}</h5>
            <a href={`https://www.${website}`} target="_blank">{website}</a>
        </div>
    );
};

export default FriendDetail;