import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const blacklist = require('blacklist');

const NOTE_TYPES = [
	'default',
	'primary',
	'success',
	'warning',
	'danger',
];

const FormNote = (props) => {
	// classes
	const componentClass = classNames(
		'FormNote',
		props.type ? ('FormNote--' + props.type) : null,
		props.className
	);

	// props
	const componentProps = blacklist(props, 'className', 'note', 'type');

	// allow users to pass through the note as an attribute or as children
	return (
		<div className={componentClass} dangerouslySetInnerHTML={props.note ? { __html: props.note } : null} {...componentProps}>
			{props.children}
		</div>
	);
};

FormNote.propTypes = {
	className: PropTypes.string,
	note: PropTypes.string,
	type: PropTypes.oneOf(NOTE_TYPES),
};

FormNote.defaultProps = {
	type: 'default',
};

export default FormNote;
