/** @format */

import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar';
import Hobbiton from './components/Hobbiton';
import Inhabitant from './components/Inhabitant';
import NameRater from './components/NameRater';
import Post from './components/Post';
import Alchemy from './components/Alchemy';


//App's function
// Crud Operators using Hobbits
// Create (Post(/users)) - <Post /> - Add form
// Read List (Get(/users)) - <Hobbiton /> - Requires delete function -WORKS...
// Read Individual (Get(/users/${id})) - <Inhabitant /> - Requires delete function
// Update Segment (Patch(/users/${id})) - <NameRater /> - Update form
// Update User (Put(/users/${id})) - <Alchemy />Update form
// Cards for each individual - Should include Delete on each (Delete(/users/${id})) - <Cards /> -- HALF WORKS...



function App() {
  const [users, setUsers] = useState();
  const userCall = () => {
    axios
    .get('http://localhost:5000/api/users/')
    .then (res => {
        console.log(res.data);
        setUsers(res.data)
        console.log("Information on user call from Hobbiton: ", users)
    })
    .catch (err => {
        console.log("Failed Usercall: ", err.message, err.response)
    })
  }
  
  useEffect(() => {
    userCall();
  }, []);




	return (
		<div className='App'>
			<header className='App-header'>
        <Navbar />
			</header>
      <Router>
        <Route>
          <Hobbiton users={users} />
        </Route>
      </Router>
		</div>
	);
}

export default App;
