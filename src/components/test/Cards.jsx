import React from "react";


const Card = (props) => {
	return (
		<div >
		<img src={`https://robohash.org/${props.id}?`} alt='robot' style={{border: '1px solid grey', width: '100%'}}/>
			<h3 >{props.name}</h3>
			<p>{props.email}</p>
		</div>
	);
};

export default Card;