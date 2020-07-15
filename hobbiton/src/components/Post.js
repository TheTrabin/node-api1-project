/** @format */

import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    const {push} = useHistory();
    const [post, setPost] = useState({
        name : '',
        bio: '',
        // id: ''
    });

const PostUser = () => {
    axios
    .post('http://localhost:5000/api/users', post)
    .then (res => {
        
        console.log(res.data)
        setPost({
            name: '',
            bio: ''
        });
        console.log("Added user: ", post);
    })
    .catch (err =>{
        console.log("Failed Userpost: ", err.message, err.response)
    })
}

const handleChanges = e => {
    e.persist();
    const newFormData = {
        ...post, [e.target.name]: e.target.value
    }
    
    setPost(newFormData);
}

const submitForm = e => {
// e.preventDefault();
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
            value={post.name}
            name="name"
        />
            
        </label>
        <label htmlFor="bio">
        <input
            id="bio"
            type="text"
            placeholder="Enter some info!"
            onChange={handleChanges}
            value={post.bio}
            name="bio"
        />
            
        </label>
        <button >Submit Form</button>
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </form>
)
};

export default Post;
