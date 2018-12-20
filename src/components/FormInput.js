import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

class FormInput extends React.Component {
	constructor(props) {
		super(props);
		this.focus = this.focus.bind(this);
	}
	
	componentDidMount () {
		if (this.props.autoFocus) {
			this.focus();
		}
	}

	focus() {
		this.refs.input.focus();
	}

	render() {
		const { noedit, multiline, size, className, ...rest } = this.props;
		// classes
		let newClassName = classNames(
			{
				'FormInput-noedit': noedit,
				'FormInput-noedit--multiline': noedit && multiline,
				'FormInput': !noedit,
			},
			(size ? ('FormInput--' + size) : null),
			className
		);
		const props = { ...rest, className: newClassName, ref: 'input' };
		let Element = 'input';
		if (noedit && this.props.href) {
			Element = 'a';
			props.type = null;
			props.children = props.children || props.value;
		} else if (noedit) {
			Element = 'div';
			props.type = null;
			props.children = props.children || props.value;
		} else if (multiline) {
			Element = 'textarea';
		}

		return <Element {...props} />;
	}
}

FormInput.propTypes = {
	autoFocus: PropTypes.bool,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	href: PropTypes.string,
	id: PropTypes.string,
	multiline: PropTypes.bool,
	name: PropTypes.string,
	noedit: PropTypes.bool,
	onChange: PropTypes.func,
	size: PropTypes.oneOf(['lg', 'sm', 'xs']),
	type: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
};

FormInput.defaultProps ={
	type: 'text',
};

export default FormInput;
