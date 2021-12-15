import './Grid.css'
import React, { useState } from 'react';
import { getBirthdays, getBirthdayMonths } from '../../apiCalls';

const Grid = (props) => {
	const [gridState, setGridState] = useState({
		months: props.months,
	});


	return (
		<section className='grid-container'>
			{gridState.months.map(month => (
				<div className='birthdayBox'>
					<h2>{month.name}</h2>
					<div>`{month.name}: {month.month}/{month.day} `</div>
				</div>
			))}
		</section>
	)
}

export default Grid;