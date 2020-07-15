/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Cards from './Cards';
import axios from 'axios';

function Inhabitant({props}) {
    console.log('From Inhabitants: props: ', props);
    const [user, setUser] = useState();
    const [users, setUsers] = useState();
	const { push } = useHistory();
	const { id } = useParams();

	const FetchUser = id => {
        axios
        .get(`http://localhost:5000/api/users/${id}`)
        .then(res => {
            console.log(res.data)
            // setUser(res.data)
            console.log("User info from FetchUser: ",user)
        })
        .catch(err => {
            console.error('Ihabitant.js: FetchUser: err: ', err.message, err.response)
        })
    };
};
	


const getNewList = () => {
    axios
        .get('http://localhost:5000/api/users')
        .then((res) => {
        console.log(res.data)
        // setUsers(res.data)
        })
        .catch((err) => console.error('Ihabitant.js: getNewList: err: ', err.message, err.response));
};

const handleDelete = (e, id) => {
	e.preventDefault();
	
	axios
		.delete(`http://localhost:5000/api/users/${id}`)
		.then(function (response) {
			console.log(JSON.stringify(response.data))
		})

		.then((res) => {
			console.log('delete', res.data);
			getNewList();
		})

		.catch((err) =>
			console.error('Issue.js: handleDelete: err: ', err.message, err.response)
        );

//         if (!user) {
//     return <div>Loading issue information...</div>;
//   }

        
        return (
            <div className="save-wrapper">
            <Cards
            {...user}
            user={props.user}
             />
           
           <button
             className="md-button"
            //  onClick={() => push(`/update-issue/${props.id}`)}
           >
             Edit
           </button>
           <button onClick={handleDelete}>
             Delete
           </button>
         </div>
        )
};

export default Inhabitant;
