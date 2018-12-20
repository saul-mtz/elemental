import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const ButtonGroup = (props) => {
	const className = classNames('ButtonGroup', props.className);
	return <div {...props} className={className} />;
};

ButtonGroup.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default ButtonGroup;
