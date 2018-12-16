import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/oct/search';

const SearchIcon = styled(Icon).attrs({
    icon: search,
    size: '18',
})`
    position: absolute;
    right: 1rem;
    top: 0.6rem;
`;

export const InputComponent = (props) => [
    <SearchIcon key="icon" />,
    <components.Input {...props} key="Input" />,
];
export const renderOption = (properties) => {
    const { label: optionLabel, data: { optionComponent } = {} } = properties;

    return (
        <components.Option {...properties}>
            <div>
                {optionLabel}
                {optionComponent && (optionComponent)}
            </div>
        </components.Option>
    );
};
