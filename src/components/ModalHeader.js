import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');
const blacklist = require('blacklist');

class ModalHeader extends React.Component {
	handleClose = () => {
		document.body.style.overflow = null;
		this.props.onClose();
	}

	render() {
		// elements
		const className = classNames('Modal__header', this.props.className);
		const close = this.props.showCloseButton ? <button type="button" onClick={this.handleClose} className="Modal__header__close" /> : null;
		const text = this.props.text ? <h4 className="Modal__header__text">{this.props.text}</h4> : null;
		const props = blacklist(this.props, 'children', 'onClose', 'showCloseButton', 'text');

		return (
			<div {...props} className={className}>
				{close}
				{text}
				{this.props.children}
			</div>
		);
	}
}

ModalHeader.propTypes =  {
	children: PropTypes.node,
	className: PropTypes.string,
	onClose: PropTypes.func,
	showCloseButton: PropTypes.bool,
	text: PropTypes.string
};
	
export default ModalHeader;
