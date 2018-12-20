import React from 'react';
import PropTypes from 'prop-types';

const blacklist = require('blacklist');
const classNames = require('classnames');

const ALERT_TYPES = [
	'danger',
	'default',
	'info',
	'primary',
	'success',
	'warning',
	'danger-inverted',
	'default-inverted',
	'info-inverted',
	'primary-inverted',
	'success-inverted',
	'warning-inverted'
];

class Pill extends React.Component {
	renderClearButton = () => {
		if (!this.props.onClear) return null;
		return <button type="button" onClick={this.props.onClear} className="Pill__clear">&times;</button>;
	}

	render() {
		var componentClass = classNames(
			'Pill',
			'Pill--' + this.props.type,
			this.props.className
		);

		var props = blacklist(this.props, 'className', 'label', 'onClear', 'onClick', 'type');
		props.className = componentClass;

		return (
			<div {...props}>
				<button type="button" onClick={this.props.onClick} className="Pill__label">{this.props.label}</button>
				{this.renderClearButton()}
			</div>
		);
	}
}

Pill.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string.isRequired,
	onClear: PropTypes.func,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(ALERT_TYPES)
};

Pill.defaultProps = {
	type: 'default'
};

export default Pill;
