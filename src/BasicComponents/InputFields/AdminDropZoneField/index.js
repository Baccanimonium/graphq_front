import React from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';
import shortID from 'shortid';
import InputWrapper from '../AdminFieldWrapper';
import { DropZoneField, PlusIcon, ThumbsContainer, Thumb, ThmubInner, Img } from './UiComponents';

const memoizedThumbs = (memoize((files) => {
    const thumbs = files.map(({ preview }) => (
        <Thumb key={shortID.generate()}>
            <ThmubInner>
                <Img src={preview} />
            </ThmubInner>
        </Thumb>
    ));
    return (
        <ThumbsContainer>
            {thumbs}
        </ThumbsContainer>

    );
}));

const AdminDropZoneField = ({ label, isShowingPreview, files, form, ...props }) => {
    const thumbs = isShowingPreview ? memoizedThumbs(files) : null;
    const handleDrop = (arr) => {
        const { name } = props;
        form.setFieldValue(name, arr);
    };
    return (
        <InputWrapper label={label}>
            <DropZoneField onDrop={handleDrop}>
                <h3>Click or drug your file here to upload your images</h3>
                <PlusIcon />
            </DropZoneField>
            {thumbs}
        </InputWrapper>
    );
};

AdminDropZoneField.propTypes = {
    isShowingPreview: PropTypes.bool,
    files: PropTypes.arrayOf(PropTypes.shape({
        preview: PropTypes.string,
    })),
    label: PropTypes.string,
};

AdminDropZoneField.defaultProps = {
    isShowingPreview: false,
    files: [],
    label: '',
};

export default AdminDropZoneField;
