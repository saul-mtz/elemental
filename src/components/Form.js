import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const blacklist = require('blacklist');

const Form = (props) => {
	const componentProps = blacklist(props, 'children', 'type', 'component');
	componentProps.className = classNames('Form', ('Form--' + props.type), props.className);

	return React.createElement(props.component, componentProps, props.children);
};

Form.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	component: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]),
	type: PropTypes.oneOf(['basic', 'horizontal', 'inline'])
};

Form.defaultProps = {
	component: 'form',
	type: 'basic'
};

export default Form;
