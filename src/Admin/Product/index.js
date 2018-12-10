import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { Formik, Field } from 'formik';
import memoizeOne from 'memoize-one';

import { AdminPageContentContainer } from 'BasicComponents/AdminCommonUiComponents';
import AdminInputField from 'BasicComponents/InputFields/AdminInputField';
import AdminTextArea from 'BasicComponents/InputFields/AdminTextAreaField';
import AdminDropZoneField from 'BasicComponents/InputFields/AdminDropZoneField';
import CreatableSelect from 'BasicComponents/InputFields/CreatableSelect';
import Select from 'BasicComponents/InputFields/Select';
import PageHeader from 'BasicComponents/PageHeader';
import { YellowButton } from 'BasicComponents/Buttons/UiComponents';
import { ADD_NEW_CATEGORY, UPLOAD_PRODUCT, GET_ALL_CATEGORIES } from '../../graphQl/schema';

import { FieldContainer, FullWidthWrapper } from './UiComponents';
import { colorNames } from '../../filters';

const selectOptions = colorNames.map((color) => ({ label: color, value: color }));
class Product extends Component {
    static propTypes = {};

    renderSelectOptions = memoizeOne((data) => data.map(({ id, name }) => ({
        label: name,
        value: id,
    })));

    render() {
        const { uploadProduct, getAllCategories: { loading, getCategories = [] }, addNewCategory } = this.props;
        const categoryOptions = this.renderSelectOptions(getCategories);
        return (
            <AdminPageContentContainer>
                <PageHeader title="Upload products" />

                <Formik
                    onSubmit={(values, actions) => {
                        uploadProduct({ variables: values });
                    }}
                    render={({ handleSubmit, values: { image } }) => (
                        <FieldContainer onSubmit={handleSubmit}>
                            <Field
                                name="categoryId"
                                render={({ field, ...props }) => (
                                    <CreatableSelect
                                        label="category id"
                                        options={categoryOptions}
                                        onCreateOption={(value) => addNewCategory({ variables: { name: value } })}
                                        {...field}
                                        {...props}
                                    />
                                )}
                            />
                            <Field
                                label="name"
                                name="name"
                                component={AdminInputField}
                            />
                            <Field
                                label="price"
                                name="price"
                                type="price"
                                component={AdminInputField}
                            />
                            <Field
                                label="quantity"
                                name="quantity"
                                type="quantity"
                                component={AdminInputField}
                            />
                            <Field
                                label="Colors"
                                name="colors"
                                component={Select}
                                options={selectOptions}
                                isMulti
                            />
                            <Field
                                label="description"
                                name="description"
                                component={AdminTextArea}
                            />
                            <FullWidthWrapper>
                                <Field
                                    name="image"
                                    render={({ field, ...props }) => (
                                        <AdminDropZoneField
                                            {...field}
                                            {...props}
                                            isShowingPreview
                                            files={image}
                                            multiple
                                            accept="image/jpeg"
                                            label="Images"
                                        />
                                    )}
                                />
                            </FullWidthWrapper>
                            <YellowButton type="submit">Upload</YellowButton>
                        </FieldContainer>
                    )}
                />
            </AdminPageContentContainer>

        );
    }
}


export default compose(
    graphql(GET_ALL_CATEGORIES, { name: 'getAllCategories' }),
    graphql(UPLOAD_PRODUCT, { name: 'uploadProduct' }),
    graphql(ADD_NEW_CATEGORY, { name: 'addNewCategory', options: { refetchQueries: [{ query: GET_ALL_CATEGORIES }] } }),
)(Product);
