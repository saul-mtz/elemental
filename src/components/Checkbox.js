import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');
const blacklist = require('blacklist');

class Checkbox extends React.Component {
	setIndeterminate = (value) => {
		this.refs.target.indeterminate = value;
	}

	componentDidMount () {
		if (this.props.autoFocus) {
			this.refs.target.focus();
		}
		this.setIndeterminate(this.props.indeterminate);
	}

	componentWillReceiveProps (nextProps) {
		this.setIndeterminate(nextProps.indeterminate);
	}

	render() {
		let componentClass = classNames('Checkbox', {
			'Checkbox--disabled': this.props.disabled,
			'Checkbox--inline': this.props.inline,
		}, this.props.className);
		let props = blacklist(this.props, 'className', 'label', 'style', 'title');
		return (
			<label className={componentClass} style={this.props.style} title={this.props.title}>
				<input ref="target" type="checkbox" className="Checkbox__input" {...props} />
				{this.props.label && <span className="Checkbox__label">{this.props.label}</span>}
			</label>
		);
	}
}

Checkbox .propTypes = {
	autoFocus: PropTypes.bool,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	indeterminate: PropTypes.bool,
	inline: PropTypes.bool,
	label: PropTypes.string,
	style: PropTypes.object,
	title: PropTypes.string,
};

export default Checkbox;
