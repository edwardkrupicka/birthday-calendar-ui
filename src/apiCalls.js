const getBirthdays = () => {
	return fetch('http://localhost:3001/api/v1/birthdays	')
		.then(response => response.json())
}

const getBirthdayMonths = () => {
	return fetch('http://localhost:3001/api/v1/months')
		.then(response => response.json())
}

export { getBirthdays, getBirthdayMonths }