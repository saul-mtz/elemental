import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');
const blacklist = require('blacklist');

const InputGroup = (props) => {
	// classes
	const className = classNames('InputGroup', {
		'InputGroup--contiguous': props.contiguous
	}, props.className);

	const componentProps = blacklist(props, 'contiguous');

	return (
		<div {...componentProps} className={className} />
	);
};

InputGroup.propTypes= {
	className: PropTypes.string,
	contiguous: PropTypes.bool
};

export Section from './InputGroupSection';
export default InputGroup;
