import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Output from '../Output/Output';
import './GenderSearchForm.css';
// import { useState } from 'react/cjs/react.production.min';

const serverUrl = 'https://api.genderize.io';

export function GenderSearchForm(props) {
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [isValid, setIsValid] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleInputChange = (e) => {
		const value = e.target.value;
		const isValid = value.length > 2 && value.length <= 10;
		setName(value);
		setIsValid(isValid);
	};

	const handleButtonClick = () => {
		const url = `${serverUrl}?name=${name}`;

		if (isValid) {
			getData(url);
		}
	};

	const getData = (url) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setGender(data.gender);
			});
	};

	const warning = (
		<p className='validateInput'>
			Имя может содержать не менее 3-х и не более 10-ти символов
		</p>
	);

	return (
		<div>
			<form className='form' onSubmit={(e) => handleSubmit(e)}>
				<Input
					onChange={handleInputChange}
					placeholder={'Введите имя...'}
				/>
				{!isValid && warning}
				<Button onClick={handleButtonClick} name={'Поиск'} />
			</form>
			<Output name={name} gender={gender} />
		</div>
	);
}
