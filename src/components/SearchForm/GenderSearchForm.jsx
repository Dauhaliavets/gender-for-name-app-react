import { React, Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Output from '../Output/Output';
import './GenderSearchForm.css';

const serverUrl = 'https://api.genderize.io';
export class GenderSearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			gender: '',
			isValid: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.getData = this.getData.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	handleInputChange(e) {
		const value = e.target.value;
		const isValid = value.length > 2 && value.length <= 10;
		isValid
			? this.setState({ isValid: isValid })
			: this.setState({ isValid: isValid });
		this.setState({ name: value });
	}

	handleButtonClick() {
		const url = `${serverUrl}?name=${this.state.name}`;

		if (this.state.isValid) {
			this.getData(url);
		}
	}

	getData(url) {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				this.setState({
					gender: data.gender,
				})
			}
			);
	}

	render() {
		const { name, gender, isValid } = this.state;
		const warning = (
			<p className='validateInput'>
				Имя может содержать не менее 3-х и не более 10-ти символов
			</p>
		);

		return (
			<div>
				<form className='form' onSubmit={this.handleSubmit}>
					<Input onChange={this.handleInputChange} placeholder={'Введите имя...'}/>
					{!isValid && warning}
					<Button onClick={this.handleButtonClick} name={'Поиск'} />
				</form>
				<Output name={name} gender={gender} />
			</div>
		);
	}
}