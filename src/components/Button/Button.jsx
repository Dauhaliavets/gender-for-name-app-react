function Button(props) {
	return (
		<button className='buttonForm' onClick={props.onClick}>
			{props.name}
		</button>
	);
}

export default Button;