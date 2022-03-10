function Input(props) {
	return (
		<input
			className='inputForm'
			type='text'
			placeholder={props.placeholder}
			onChange={props.onChange}
		></input>
	);
}

export default Input;