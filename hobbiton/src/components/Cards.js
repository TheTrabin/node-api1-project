/** @format */

import React from 'react';
import axios from 'axios';

const Cards = (props) => {
	return (
		<div>
			<h2>Name: {props.name}</h2>
			<h2>Bio: {props.bio}</h2>
		</div>
	);
};

export default Cards;
