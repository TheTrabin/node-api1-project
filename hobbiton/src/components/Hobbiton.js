/** @format */

import React, { 
    // useState, 
    // useEffect 
} from 'react';
// import axios from 'axios';
// import Inhabitant from './Inhabitant';
import Cards from './Cards';

const Hobbiton = ({ users, props }) => {
	console.log('inhabitants pop: ', props);
	// const [users, setUsers] = useState({});

	if (!users) {
		return (
			<div>Everyone's off on an Adventure at the moment, please wait...</div>
		);
	}

	return (
		<div className='post-list'>
			{users.map(user => (
                <Cards {...user} id={user.id} user={user} props={props} users={users} />
			))}
		</div>
	);
};

export default Hobbiton;
