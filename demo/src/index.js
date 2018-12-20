import React, { Component } from 'react'
import { render } from 'react-dom'

import Grid from './grid';
import Glyphs from './glyphs';
import Misc from './misc';

class Demo extends Component {
	render() {
		return (
			<div>
				<h1>Components</h1>
				<Grid />
				<hr/>
				<Glyphs />
				<hr />
				<Misc />
			</div>
		);
	}
}

render(<Demo/>, document.querySelector('#demo'));
