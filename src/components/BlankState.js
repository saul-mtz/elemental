import React from 'react';
import PropTypes from 'prop-types';

const BlankState = (props) => <div className="BlankState" {...props} />;

BlankState.propTypes = {
	children: PropTypes.node.isRequired,
};

export const Heading = (props) => <h2 className="BlankState__heading" {...props} />;

Heading.propTypes = {
	children: PropTypes.node.isRequired,
};

export default BlankState;
