import React from 'react'

import { Button, Glyph } from '../../src';

export default () => (
	<div>
		<h2>
			<a href="http://elemental-ui.com/glyphs" target="_blank">Glyphs</a>
		</h2>

		<h3>Basic Example</h3>
		<div className="demo-block">
			<Glyph icon="thumbsup"/>
		</div>

		<h3>Colors</h3>
		<div className="demo-block">
			<Glyph icon='heart' type='danger'/>
			<Glyph icon='heart' type='default'/>
			<Glyph icon='heart' type='muted'/>
			<Glyph icon='heart' type='primary'/>
			<Glyph icon='heart' type='success'/>
			<Glyph icon='heart' type='warning'/>
		</div>

		<h3>Buttons</h3>
		<div className="demo-block">
			<Button type="primary"><Glyph icon="beaker"/></Button>
			<Button type="danger"><Glyph icon="flame"/></Button>
			<Button type="success"><Glyph icon="squirrel"/></Button>
			<Button type="warning"><Glyph icon="beaker"/></Button>
		</div>
	</div>
);
