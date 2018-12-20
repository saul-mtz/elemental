import React from 'react';
import PropTypes from 'prop-types';

var classNames = require('classnames');
var blacklist = require('blacklist');

class InputGroupSection extends React.Component {
	render() {
		// classes
		var className = classNames('InputGroup_section', {
			'InputGroup_section--grow': this.props.grow
		}, this.props.className);
		var props = blacklist(this.props, 'grow');

		return (
			<div {...props} className={className} />
		);
	}
}

InputGroupSection.propTypes = {
	className: PropTypes.string,
	grow: PropTypes.bool
};
	
export default InputGroupSection;
