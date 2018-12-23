import React from 'react';
import PropTypes from 'prop-types';
import theme from '../constants';

const Container = ({ children, clearfix, gutter, maxWidth, style, ...props }) => {
	const styles = {
		clearfix: {
			clear: 'both',
			display: 'table',
		},
		container: {
			marginLeft: 'auto',
			marginRight: 'auto',
			maxWidth: maxWidth,
			paddingLeft: gutter,
			paddingRight: gutter,
		},
	};

	const newStyle = {
		...styles.container,
		...style,
	};

	return (
		<div {...props} style={newStyle}>
			{clearfix && <span style={styles.clearfix} />}
			{children}
			{clearfix && <span style={styles.clearfix} />}
		</div>
	);
};

Container.propTypes = {
	clearfix: PropTypes.bool,
	gutter: PropTypes.number,
	maxWidth: PropTypes.number,
};

Container.defaultProps = {
	gutter: theme.width.gutter,
	maxWidth: theme.width.container,
};

export default Container;
