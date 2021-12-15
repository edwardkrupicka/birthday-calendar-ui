import './Grid.css'
import React, { useState } from 'react';
import { getBirthdays } from '../../apiCalls';

const Grid = () => {
	const [gridState, setGridState] = useState({
		birthdays: ['hello']
	});

	const fetchBirthdays = getBirthdays().then(data => {
		setGridState({birthdays: data})
		})



	return (
		<section className='grid-container'>
			{gridState.birthdays.map(birthday => (
				<div className='birthdayBox'>
					<h2>{birthday.month}</h2>
					<div>`{birthday.name}: {birthday.month}/{birthday.day} `</div>
				</div>
			))}
		</section>
	)
}

export default Grid;