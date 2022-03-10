function Output(props) {
	return props.name && props.gender ? (
		<div className='output'>{`The name <(${props.name})> most likely refers to a <(${props.gender})>`}</div>
	) : (
		<div className='output'>{`Send a search query`}</div>
	);
}

export default Output