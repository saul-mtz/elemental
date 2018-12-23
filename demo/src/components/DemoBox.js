import React from 'react';
import PropTypes from 'prop-types';

import E from '../../../src/constants';

const classNames = require('classnames');

const ALIGN_TRANSFORM = {
	'center': 'center',
	'left': 'flex-start',
	'right': 'flex-end',
};

const DemoBox = (props) => {
	let boxStyle = {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 4,
		display: 'flex',
		justifyContent: ALIGN_TRANSFORM[props.align],
		msFlexPack: ALIGN_TRANSFORM[props.align],
		WebkitJustifyContent: ALIGN_TRANSFORM[props.align],
		marginBottom: E.width.gutter,
		padding: '.66em 1.5em',
	};
	if (props.inverted) {
		boxStyle.backgroundColor = E.color.appPrimary;
	}
	let className = classNames('DemoBox', props.className);

	return (
		<div style={Object.assign({}, boxStyle, props.style)} className={className}>
			{ props.children }
		</div>
	);
};

DemoBox.propTypes = {
	align: PropTypes.oneOf(['center', 'left', 'right']),
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	inverted: PropTypes.bool,
	style: PropTypes.object,
};

DemoBox.defaultProps = {
	align: 'center',
};

export default DemoBox;
