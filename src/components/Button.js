import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');
const blacklist = require('blacklist');

const BUTTON_SIZES = ['lg', 'sm', 'xs'];

const BUTTON_TYPES = [
	'default',
	'default-primary',
	'default-success',
	'default-warning',
	'default-danger',
	'hollow-primary',
	'hollow-success',
	'hollow-warning',
	'hollow-danger',
	'primary',
	'success',
	'warning',
	'danger',
	'link',
	'link-text',
	'link-primary',
	'link-success',
	'link-warning',
	'link-danger',
	'link-cancel',
	'link-delete',
];

const Button = (props) => {
	// classes
	const componentClass = classNames(
		'Button',
		'Button--' + props.type,
		(props.size ? 'Button--' + props.size : null),
		{
			'Button--block': props.block,
			'is-active': props.isActive
		},
		props.className
	);

	// props
	const componentProps = blacklist(props, 'type', 'size', 'component', 'className', 'submit');
	componentProps.className = componentClass;

	if (props.component) {
		return React.cloneElement(props.component, componentProps);
	}

	let tag = 'button';
	componentProps.type = props.submit ? 'submit' : 'button';

	if (componentProps.href) {
		tag = 'a';
		delete componentProps.type;
	}

	return React.createElement(tag, componentProps, props.children);
};

Button.propTypes = {
	block: PropTypes.bool,
	className: PropTypes.string,
	component: PropTypes.element,
	href: PropTypes.string,
	isActive: PropTypes.bool,
	size: PropTypes.oneOf(BUTTON_SIZES),
	submit: PropTypes.bool,
	type: PropTypes.oneOf(BUTTON_TYPES),
};

Button.defaultProps = {
	type: 'default',
};

export default Button;
