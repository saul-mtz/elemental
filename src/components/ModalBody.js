import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const ModalBody = (props) => {
	const className = classNames('Modal__body', props.className);
	return <div {...props} className={className} />;
};

ModalBody.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

export default ModalBody;
