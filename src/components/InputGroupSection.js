import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');
const blacklist = require('blacklist');

const InputGroupSection = (props) => {
	// classes
	const className = classNames('InputGroup_section', {
		'InputGroup_section--grow': props.grow
	}, props.className);
	const componentProps = blacklist(props, 'grow');

	return <div {...componentProps} className={className} />;
};

InputGroupSection.propTypes = {
	className: PropTypes.string,
	grow: PropTypes.bool
};
	
export default InputGroupSection;
