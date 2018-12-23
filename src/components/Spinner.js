import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const Spinner = (props) => {
	const componentClass = classNames(
		'Spinner',
		'Spinner--' + props.type,
		'Spinner--' + props.size,
		props.className
	);

	return (
		<div className={componentClass}>
			<span className="Spinner_dot Spinner_dot--first" />
			<span className="Spinner_dot Spinner_dot--second" />
			<span className="Spinner_dot Spinner_dot--third" />
		</div>
	);
};

Spinner.propTypes = {
	className: PropTypes.string,
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	type: PropTypes.oneOf(['default', 'primary', 'inverted'])
};

Spinner.defaultProps = {
	type: 'default',
	size: 'sm'
};

export default Spinner;
