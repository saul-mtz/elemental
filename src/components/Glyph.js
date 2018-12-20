import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');
const icons = require('../Octicons').map;
export const names = require('../Octicons').keys;

const Glyph = (props) => {
	// classes
	const className = classNames(
		'Glyph__icon',
		icons[props.icon].className,
		(props.type ? 'IconField__icon-color--' + props.type : null),
		props.className
	);
	return <i className={className} />;
};

Glyph.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.oneOf(names),
	type: PropTypes.oneOf([
		'danger',
		'default',
		'muted',
		'primary',
		'success',
		'warning',
	]),
};

export default Glyph;
