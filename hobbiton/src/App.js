/** @format */

import React from 'react';
import logo from './logo.svg';
import './App.css';

//App's function
// Crud Operators using Hobbits
// Create (Post(/users)) - <Post /> - Add form
// Read List (Get(/users)) - <Hobbiton /> - Requires delete function
// Read Individual (Get(/users/${id})) - <Inhabitant /> - Requires delete function
// Update Segment (Patch(/users/${id})) - <NameRater /> - Update form
// Update User (Put(/users/${id})) - <Alchemy />Update form
// Cards for each individual - Should include Delete on each (Delete(/users/${id}))

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
