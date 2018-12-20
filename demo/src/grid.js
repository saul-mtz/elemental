import React from 'react'

import {
	Button,
	ButtonGroup,
	Col,
	Dropdown,
	Row,
} from '../../src';

import DemoBox from '../../site/src/components/DemoBox';

const DROPDOWN_OPTIONS = [
	{label: 'Action'},
	{label: 'Another action'},
	{label: 'Something else here'},
	{type: 'divider'},
	{type: 'header', label: 'Dropdown header'},
	{label: 'Separated link'}
];

export default () => (
	<div>
		<h2>
			<a href="http://elemental-ui.com/grid" target="_blank">Grid</a>
		</h2>
		<div className="demo-block">
			<Row>
				<Col basis="25%"><DemoBox>♥</DemoBox></Col>
				<Col basis="25%"><DemoBox>♥</DemoBox></Col>
				<Col basis="25%"><DemoBox>♥</DemoBox></Col>
				<Col basis="25%"><DemoBox>♥</DemoBox></Col>
				<Col basis="25%"><DemoBox>♥</DemoBox></Col>
				<Col basis="25%"><DemoBox>♥</DemoBox></Col>
			</Row>
		</div>
		<hr/>

		<h2>
			<a href="http://elemental-ui.com/buttons" target="_blank">Buttons</a>
		</h2>
		<h3>Sizes</h3>
		<div className="demo-block">
			<Button size="lg">Large Button</Button>
			<Button>Default Button</Button>
			<Button size="sm">Small Button</Button>
			<Button size="xs">Extra Small Button</Button>
		</div>

		<h3>Variants</h3>
		<div className="demo-block">
			<Button type="primary">Primary</Button>
			<Button type="success">Success</Button>
			<Button type="warning">Warning</Button>
			<Button type="danger">Danger</Button>
		</div>

		<h3>Button Groups</h3>
		<div className="demo-block">
			<ButtonGroup>
				<Button type="default">Left</Button>
				<Button type="default">Middle</Button>
				<Button type="default">Right</Button>
			</ButtonGroup>
		</div>

		<h3>Dropdown</h3>
		<div className="demo-block">
			<Dropdown items={DROPDOWN_OPTIONS}>
				<h3>I am an H3!</h3>
			</Dropdown>
		</div>
	</div>
)
