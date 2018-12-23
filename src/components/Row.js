import React from 'react';
import PropTypes from 'prop-types';

import E from '../constants';

const blacklist = require('blacklist');
const classNames = require('classnames');

const Row = (props) => {
	let { gutter } = props;
	let rowStyle = {
		display: 'flex',
		flexWrap: 'wrap',
		msFlexWrap: 'wrap',
		WebkitFlexWrap: 'wrap',
		marginLeft: (gutter / -2),
		marginRight: (gutter / -2),
	};
	let className = classNames('Row', props.className);
	let componentProps = blacklist(props, 'className', 'gutter', 'style');

	return (
		<div {...componentProps} style={Object.assign(rowStyle, props.style)} className={className} />
	);
};

Row.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	gutter: PropTypes.number,
	style: PropTypes.object,
};

Row.defaultProps = {
	gutter: E.width.gutter,
};

export default Row;
