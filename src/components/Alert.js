import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const ALERT_TYPES = [
	'danger',
	'error', // alias for danger
	'info',
	'primary',
	'success',
	'warning',
];

const ElementalAlert = (props) => {
	const componentClass = classNames(
		'Alert',
		'Alert--' + props.type,
		props.className
	);

	return <div className={componentClass}>{props.children}</div>;
};

ElementalAlert.propTypes = {
	children: PropTypes.element.isRequired,
	className: PropTypes.string,
	type: PropTypes.oneOf(ALERT_TYPES).isRequired,
};

export default ElementalAlert;
