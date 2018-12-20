import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const Table = (props) => {
	// classes
	const className = classNames('Table', props.className);

	// render table element
	return (
		<table {...props} className={className} />
	);
};

Table.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};
	
export default Table;
