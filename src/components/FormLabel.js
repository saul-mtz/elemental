import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const blacklist = require('blacklist');

const FormLabel = (props) => {
	// classes
	const className = classNames('FormLabel', props.className);
	// props
	const componentProps = blacklist(props, 'htmlFor', 'id', 'className', 'style');
	// style
	let style;
	if (props.verticalAlign) {
		style = {
			verticalAlign: props.verticalAlign,
		};
	}

	return (
		<label className={className} htmlFor={props.htmlFor || props.id} style={style || props.style} {...componentProps}>
			{props.children}
		</label>
	);
};

FormLabel.propTypes = {
	className: PropTypes.string,
	htmlFor: PropTypes.string,
	id: PropTypes.string,
	style: PropTypes.object,
	verticalAlign: PropTypes.oneOf([
		'baseline',
		'bottom',
		'inherit',
		'initial',
		'middle',
		'sub',
		'super',
		'text-bottom',
		'text-top',
		'top',
	]),
};

export default FormLabel;
