import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const classNames = require('classnames');
const icons = require('../Octicons').map;

const FormIcon = (props) => {
	const className = classNames(
		'IconField__icon',
		icons[props.icon].className,
		(props.fill ? 'IconField__icon-fill--' + props.fill : null),
		(props.type ? 'IconField__icon-color--' + props.type : null),
		props.className
	);

	return props.isLoading ? <Spinner size="sm" /> : <div className={className} />;
};

FormIcon.propTypes = {
	className: PropTypes.string,
	color: PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
	fill: PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
	icon: PropTypes.string,
	isLoading: PropTypes.bool,
	type: PropTypes.string,
};

export default FormIcon;
