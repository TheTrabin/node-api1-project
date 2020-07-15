/** @format */

import React from 'react';
import axios from 'axios';

const Cards = (user, users) => {

    const handleDelete = (e, id) => {
        e.preventDefault();
        
        axios
            .delete(`http://localhost:5000/api/users/${user.id}`)
            .then(function (response) {
                console.log(JSON.stringify(response.data))
            })
    
            .then((res) => {
                console.log('delete', res.data);
            })
    
            .catch((err) =>
                console.error('Issue.js: handleDelete: err: ', err.message, err.response)
            );
        };


    console.log("Card Props: " , user);
	return (
        <div>
		<div>
			<h2>Name: {user.name}</h2>
			<h2>Bio: {user.bio}</h2>
		</div>
        <div>
   <button onClick={handleDelete}>
             Delete
           </button>
        </div>
        </div>
	);
};

export default Cards;
