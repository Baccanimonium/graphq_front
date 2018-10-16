import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Formik } from 'formik';
import Dropzone from 'react-dropzone';
import { UPLOAD_FILE } from '../../graphQl/schema';

class Product extends Component {
    state = {
        name: '',
        content: '',
    }

    handleChange = (value) => {
        console.log(value);
        this.setState({ name: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const file = new Blob([this.state.content], { type: 'text/plain' });
        file.name = `${this.state.name}.txt`;

        this.props.mutate({
            variables: { file },
            update(proxy, { data: { singleUpload } }) {
                const data = proxy.readQuery({ query: uploadsQuery });
                data.uploads.push(singleUpload);
                proxy.writeQuery({ query: uploadsQuery, data });
            },
        });
    }

    render() {
        return (
            <Formik
                onSubmit={() => { this.props.uploadFile({ variables: { file: this.state.name } }); }}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>

                        <input type="text" name="name" />
                        <textarea type="description" name="name" />
                        <Dropzone onDrop={this.handleChange}>
                            <p>Try dropping some files here, or click to select files to upload.</p>
                        </Dropzone>
                        <input type="price" name="name" />
                        <input type="quantity" name="name" />
                        <button type="submit">Upload</button>
                    </form>
                )}
            />

        );
    }
}

Product.propTypes = {};

export default graphql(UPLOAD_FILE, { name: 'uploadFile' })(Product);
