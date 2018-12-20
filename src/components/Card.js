import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const Card = (props) => {
	const className = classNames('Card', props.className);
	return <div {...props} className={className}/>;
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Card;
