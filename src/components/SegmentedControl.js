import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

class SegmentedControl extends React.Component {
	onChange = (value) => {
		this.props.onChange(value);
	}

	render () {
		let componentClassName = classNames('SegmentedControl', ('SegmentedControl--' + this.props.type), {
			'SegmentedControl--equal-widths': this.props.equalWidthSegments
		}, this.props.className);

		let options = this.props.options.map((op) => {

			let buttonClassName = classNames('SegmentedControl__button', {
				'is-selected': op.value === this.props.value
			});

			return (
				<span key={'option-' + op.value} className="SegmentedControl__item">
					<button type="button" onClick={this.onChange.bind(this, op.value)} className={buttonClassName}>
						{op.label}
					</button>
				</span>
			);
		});

		return <div className={componentClassName}>{options}</div>;
	}
}

SegmentedControl.propTypes = {
	className: PropTypes.string,
	equalWidthSegments: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	type: PropTypes.oneOf(['default', 'muted', 'danger', 'info', 'primary', 'success', 'warning']),
	value: PropTypes.string
};


SegmentedControl.defaultProps = {
	type: 'default'
};

export default SegmentedControl;
