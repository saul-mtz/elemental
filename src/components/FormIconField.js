import React from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';
import Spinner from './Spinner';

const classNames = require('classnames');
const blacklist = require('blacklist');

const ICON_MAP = require('../Octicons').map;
const ICON_KEYS = require('../Octicons').keys;
const COLOR_VARIANTS = ['danger', 'default', 'primary', 'success', 'warning'];

const FormIconField = (props) => {
	// props
	const componentProps = blacklist(props, 'children', 'iconPosition', 'iconKey', 'iconFill', 'iconColor', 'iconIsLoading');

	// classes
	const fieldClass = classNames('IconField', {
			'has-fill-icon': props.iconFill,
			'is-loading-icon': props.iconIsLoading
		},
		(props.iconFill ? ('field-context-' + props.iconFill) : null),
		(props.iconColor ? ('field-context-' + props.iconColor) : null),
		props.iconPosition);

	const iconClass = classNames(
		'IconField__icon',
		(props.iconFill ? 'IconField__icon-fill--' + props.iconFill : null),
		(props.iconColor ? 'IconField__icon-color--' + props.iconColor : null),
		ICON_MAP[props.iconKey].className
	);

	const icon = props.iconIsLoading ? <Spinner size="sm" /> : <span className={iconClass} />;

	return (
		<FormField {...componentProps}>
			<div className={fieldClass}>
				{props.children}
				{icon}
			</div>
		</FormField>
	);
};

FormIconField.propTypes = {
	className: PropTypes.string,
	iconColor: PropTypes.oneOf(COLOR_VARIANTS),
	iconFill: PropTypes.oneOf(COLOR_VARIANTS),
	iconIsLoading: PropTypes.bool,
	iconKey: PropTypes.oneOf(ICON_KEYS).isRequired,
	iconPosition: PropTypes.oneOf(['left', 'right']),
};

FormIconField.defaultProps = {
	iconPosition: 'left',
};

export default FormIconField;
