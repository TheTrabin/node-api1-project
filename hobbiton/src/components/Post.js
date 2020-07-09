/** @format */

import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    const {push} = useHistory();
    const [users, setUsers] = useState({
        "name" : '',
        "bio": ''
    });

const PostUser = () => {
    axios
    .post('http://localhots:5000/api/users')
    .then (res => {
        console.log(res.data)
        setUsers({
            "name": '',
            "bio": ''
        });
        console.log("Added user: ", users);
    })
    .catch (err =>{
        console.log("Failed Userpost: ", err.message, err.response)
    })
}

const handleChanges = e => {
    e.persist();
    const newFormData = {
        ...users, [e.target.name]: e.target.value
    }
    
    setUsers(newFormData);
}

const submitForm = e => {
e.preventDefault();
PostUser();


// push(Hobbiton);

}

return (
<form onSubmit={submitForm} >
         <label htmlFor="name">
                <input
            id="namee"
            type="text"
            placeholder="Name of Inhabitant"
            onChange={handleChanges}
            value={users.name}
            name="username"
        />
            
        </label>
        <label htmlFor="bio">
        <input
            id="bio"
            type="text"
            placeholder="Enter some info!"
            onChange={handleChanges}
            value={users.bio}
            name="first_name"
        />
            
        </label>
        <button >Submit Form</button>
        <pre>{JSON.stringify(users, null, 2)}</pre>
    </form>
)
};

export default Post;
