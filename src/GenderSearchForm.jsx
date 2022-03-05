import {React, useState} from 'react';
import './GenderSearchForm.css';

export function GenderSearchForm() {
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const serverUrl = 'https://api.genderize.io';

	
	// TODO: При первом сабмите в стейт помещается value, запрос отправляется с ''

	const submit = async (e) => {
		e.preventDefault();
		const newValue = e.target[0].value;
		setName(newValue);

		const url = `${serverUrl}?name=${name}`;
		const data = await getData(url);
		setGender(data.gender);
	};

	const getData = async (url) => {
		const response = await fetch(url);
		return await response.json();
	};

	return (
		<div>
			<form className='form' onSubmit={submit}>
				<input className='inputForm' type='text' placeholder={'Введите имя...'}></input>
				<button className='buttonForm'>{'Поиск'}</button>
			</form>
			{
				name && gender && 
				<div className='output'>{`The name ${name} most likely refers to a ${gender}`}</div>
			}
		</div>
	);
}
