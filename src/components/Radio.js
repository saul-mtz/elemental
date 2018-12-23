import React from 'react';
import PropTypes from 'prop-types';

const blacklist = require('blacklist');
const classNames = require('classnames');

const Radio = (props) => {
	const  componentClass = classNames('Radio', {
		'Radio--disabled': props.disabled,
		'Radio--inline': props.inline
	}, props.className);

	const componentProps = blacklist(props, 'className', 'label');

	return (
		<label className={componentClass}>
			<input type="radio" className="Radio__input" {...componentProps} />
			{props.label && <span className="Radio__label">{props.label}</span>}
		</label>
	);
};
	
Radio.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	inline: PropTypes.bool,
	label: PropTypes.string
};

export default Radio;
