/** @format */

import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar';
import Hobbiton from './components/Hobbiton';
// import Inhabitant from './components/Inhabitant';
import NameRater from './components/NameRater';
import Post from './components/Post';
import Alchemy from './components/Alchemy';


//App's function
// Crud Operators using Hobbits

// Create (Post(/users)) - <Post /> - Add form
//  - Module has been completed, not added at the moment. Will test later.
//  - Post functions properly.

// Read List (Get(/users)) - <Hobbiton /> - Requires delete function -WORKS...
//  - Functions properly. No changes required. Renders fine on page.

// Read Individual (Get(/users/${id})) - <Inhabitant /> - Requires delete function
//  - Issue with passing props to Inhabitant, but when I can figure that out, it should work just fine.
//  - Should be passing information from Hobbiton, as it does for the Cards themselves.

// Update Segment (Patch(/users/${id})) - <NameRater /> - Update form
//  - Will be a module to be called on

// Update User (Put(/users/${id})) - <Alchemy />Update form

// Cards for each individual - Should include Delete on each (Delete(/users/${id})) - <Cards /> -- HALF WORKS...
//  - Information when Directly tied to Hobbiton Passes the information into Cards. Might have to change the name of the Statement for Cards and see if that processes.



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
        <Route>
          <Post/>
        </Route>
        {/* <Route>
          <Inhabitant users={users} />
        </Route> */}
      </Router>
		</div>
	);
}

export default App;
