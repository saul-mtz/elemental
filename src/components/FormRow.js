import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const FormRow = (props) => {
	const className = classNames('FormRow', props.className);

	return (
		<div className={className}>
			{props.children}
		</div>
	);
};

FormRow.propTypes = {
	className: PropTypes.string,
};

export default FormRow;
