import { React, Component } from 'react';
import './GenderSearchForm.css';

export class GenderSearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			gender: '',
		};

		this.serverUrl = 'https://api.genderize.io';

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.getData = this.getData.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	};

	handleInputChange(e){
		const value = e.target.value;
		this.setState({name: value});
	};

	handleButtonClick(){
		const url = `${this.serverUrl}?name=${this.state.name}`;
		this.getData(url)
	}
	
	getData(url) {
		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({
				gender: data.gender
			}));
	};

	render() {
		const {name, gender} = this.state;

		return (
			<div>
				<form className='form' onSubmit={this.handleSubmit}>
					<input
						className='inputForm'
						type='text'
						placeholder={'Введите имя...'}
						onChange={this.handleInputChange}
					></input>
					<button className='buttonForm' onClick={this.handleButtonClick}>{'Поиск'}</button>
				</form>
				{name && gender && (
					<div className='output'>{`The name ${name} most likely refers to a ${gender}`}</div>
				)}
			</div>
		);
	}
}
