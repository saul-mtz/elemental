import React from 'react';
import PropTypes from 'prop-types';

import E from '../constants';

const blacklist = require('blacklist');

class ResponsiveText extends React.Component {
	state = {
		windowWidth: (typeof window !== 'undefined') ? window.innerWidth : 0
	};

	handleResize = () => {
		this.setState({
			windowWidth: (typeof window !== 'undefined') ? window.innerWidth : 0
		});
	}

	componentDidMount() {
		if (typeof window !== 'undefined') window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		if (typeof window !== 'undefined') window.removeEventListener('resize', this.handleResize);
	}

	render() {
		let { hiddenXS, hiddenSM, hiddenMD, hiddenLG, visibleXS, visibleSM, visibleMD, visibleLG } = this.props;
		let { windowWidth } = this.state;

		let text;

		// set widths / flex-basis
		if (windowWidth < E.breakpoint.xs) {
			text = visibleXS || hiddenSM || hiddenMD || hiddenLG;
		} else if (windowWidth < E.breakpoint.sm) {
			text = hiddenXS || visibleSM || hiddenMD || hiddenLG;
		} else if (windowWidth < E.breakpoint.md) {
			text = hiddenXS || hiddenSM || visibleMD || hiddenLG;
		} else {
			text = hiddenXS || hiddenSM || hiddenMD || visibleLG;
		}

		let props = blacklist(this.props, {
			'hiddenXS': true,
			'hiddenSM': true,
			'hiddenMD': true,
			'hiddenLG': true,
			'visibleXS': true,
			'visibleSM': true,
			'visibleMD': true,
			'visibleLG': true,
		});

		return <span {...props}>{text}</span>;
	}
}

ResponsiveText.propTypes = {
	hiddenLG: PropTypes.string,
	hiddenMD: PropTypes.string,
	hiddenSM: PropTypes.string,
	hiddenXS: PropTypes.string,
	visibleLG: PropTypes.string,
	visibleMD: PropTypes.string,
	visibleSM: PropTypes.string,
	visibleXS: PropTypes.string,
};

export default ResponsiveText;
