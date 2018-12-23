import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const blacklist = require('blacklist');

const FormField = (props) => {
	// classes
	const componentClass = classNames('FormField', {
		'offset-absent-label': props.offsetAbsentLabel
	}, props.width, props.className);

	// props
	var componentProps = blacklist(props, 'className', 'label', 'offsetAbsentLabel', 'width');

	// elements
	var componentLabel = props.label ? (
		<label className="FormLabel" htmlFor={props.id || props.htmlFor}>
			{props.label}
		</label>
	) : null;

	return (
		<div className={componentClass} {...componentProps}>
			{componentLabel}
			{props.children}
		</div>
	);
};

FormField.propTypes = {
	className: PropTypes.string,
	htmlFor: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	offsetAbsentLabel: PropTypes.bool,
	width: PropTypes.oneOf([
		'one-half',
		'two-quarters',
		'three-sixths',
		'one-quarter',
		'three-quarters',
		'one-third',
		'two-sixths',
		'two-thirds',
		'four-sixths',
		'one-fifth',
		'two-fifths',
		'three-fifths',
		'four-fifths',
		'one-sixth',
		'five-sixths',
	]),
};

export default FormField;
