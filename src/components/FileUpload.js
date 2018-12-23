import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Spinner from './Spinner';

const blacklist = require('blacklist');

class FileUpload extends React.Component {
	state = {
		dataURI: null,
		file: {},
		loading: false,
	};

	triggerFileBrowser = () => {
		this.refs.fileInput.click();
	}

	handleChange = (e) => {
		var reader = new FileReader();
		var file = e.target.files[0];

		reader.readAsDataURL(file);

		reader.onloadstart = () => {
			this.setState({
				loading: true,
			});
		};
		reader.onloadend = (upload) => {
			this.setState({
				loading: false,
				file: file,
				dataURI: upload.target.result
			});
			if (typeof this.props.onChange === 'function') {
				this.props.onChange(e, {
					file: file,
					dataURI: upload.target.result
				});
			}
		};
	}

	cancelUpload = (e) => {
		this.setState({
			dataURI: null,
			file: {},
		});
		this.props.onChange(e, null);
	}

	componentDidMount () {
		this.refs.fileInput.addEventListener('click', function () {
			this.value = '';
		}, false);
	}

	render () {
		let { dataURI, file } = this.state;
		// props
		let props = blacklist(this.props, 'buttonClassChange', 'buttonClassInitial', 'buttonLabelChange', 'buttonLabelInitial', 'disabled', 'file', 'onChange');
		// elements
		let component = dataURI ? (
			<div className="FileUpload">
				<div className="FileUpload__image">
					<img className="FileUpload__image-src" src={dataURI} />
				</div>
				<div className="FileUpload__content">
					<div className="FileUpload__message">
						{file.name} ({Math.round(file.size / 1024)}Kb)
					</div>
					<div className="FileUpload__buttons">
						<Button onClick={this.triggerFileBrowser} disabled={this.state.loading}>
							{this.state.loading && <Spinner />}
							{this.props.buttonLabelChange}
						</Button>
						<Button onClick={this.cancelUpload} type="link-cancel" disabled={this.state.loading}>Cancel</Button>
					</div>
				</div>
			</div>
		) : (
			<Button onClick={this.triggerFileBrowser} disabled={this.props.disabled || this.state.loading}>
				{this.state.loading ? <Spinner /> : null}
				{this.props.buttonLabelInitial}
			</Button>
		);

		return (
			<div>
				{component}
				<input style={{ display: 'none' }} type="file" ref="fileInput" onChange={this.handleChange} {...props} />
			</div>
		);
	}
}

FileUpload.propTypes = {
	buttonLabelChange: PropTypes.string,
	buttonLabelInitial: PropTypes.string,
	disabled: PropTypes.bool,
	file: PropTypes.object, // https://developer.mozilla.org/en/docs/Using_files_from_web_applications
	onChange: PropTypes.func,
}

FileUpload.defaultProps = {
	buttonLabelInitial: 'Upload File',
	buttonLabelChange:  'Change File',
};

export default FileUpload;
