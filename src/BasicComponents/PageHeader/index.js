import React from 'react';
import PropTypes from 'prop-types';
import { PageHeaderWrapper, TitleWrapper } from './UiComponents';

const PageHeader = ({ title }) => (
    <PageHeaderWrapper>
        <TitleWrapper>{title}</TitleWrapper>
    </PageHeaderWrapper>
);

PageHeader.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
};

export default PageHeader;
