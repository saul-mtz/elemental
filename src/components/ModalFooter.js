import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const ModalFooter = (props) => {
	const className = classNames('Modal__footer', props.className);
	return <div {...props} className={className} />;
};

ModalFooter.propTypes = {
	children: PropTypes.element.isRequired,
	className: PropTypes.string
};
	
export default ModalFooter;
