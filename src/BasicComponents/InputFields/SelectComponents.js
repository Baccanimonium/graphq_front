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
    left: 1rem;
    top: 1.3rem;
`;

export const InputComponent = (props) => [
    <SearchIcon key="icon" />,
    <components.Input {...props} key="Input" />,
];
