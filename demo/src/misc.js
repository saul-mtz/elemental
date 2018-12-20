import React from 'react'

import { Alert, Card, Col, Pagination, Pill } from '../../src';
import Row from '../../src/components/Row';

export default () => (
	<div>
		<h2>
			<a href="http://elemental-ui.com/misc" target="_blank">Miscellaneous</a>
		</h2>
		<h3>Alert</h3>
		<div className="demo-block">
			<Alert type="info"><strong>Info:</strong> Alerts can contain <a href="/misc">Anchor Tags</a></Alert>
			<Alert type="success"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>
			<Alert type="warning"><strong>Warning:</strong> Pay attention to me, things are not going according to
				plan.</Alert>
			<Alert type="danger"><strong>Error:</strong> You need to take action, something has gone terribly
				wrong!</Alert>
			<Alert type="danger"><strong>Error:</strong> You need to take action, something has gone terribly
				wrong!</Alert>
		</div>

		<h3>Cards</h3>
		<div className="demo-block">
			<Card>Hi there, I'm a card! I'm pretty simple, but with a little imagination I can be really awesome :)</Card>
			<Row>
				<Col><Card>Use</Card></Col>
				<Col><Card>me</Card></Col>
				<Col><Card>in</Card></Col>
				<Col><Card>a</Card></Col>
				<Col><Card>grid</Card></Col>
			</Row>
		</div>

		<h3>Pagination</h3>
		<div className="demo-block">
			<Pagination
				currentPage={1}
				onPageSelect={() => {
				}}
				pageSize={4}
				plural="Test plural"
				singular="Test singular"
				total={12}
				limit={5}/>
		</div>

		<h3>Pills</h3>
		<div className="demo-block">
			<Pill label="Create" type="success-inverted"/>
			<Pill label="First Pill" type="primary" />
			<Pill label="Second Pill" type="primary" />
			<Pill label="Third Pill" type="primary" />
			<Pill label="Clear All"/>
		</div>
	</div>
)
