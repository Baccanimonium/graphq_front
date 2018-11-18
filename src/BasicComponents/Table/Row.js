import React from 'react';
import PropTypes from 'prop-types';
import { Td } from './UiComponents';

const Row = ({ tableColumnsList, rowData }) => {
    const renderedColumns = tableColumnsList.map(({ key, format }) => {
        const item = rowData[key];
        const normalizedItem = format ? format(item, rowData) : item;
        return (
            <Td key={key}>
                {normalizedItem}
            </Td>
        );
    });
    return (
        <tr>
            {renderedColumns}
        </tr>
    );
};

Row.propTypes = {
    tableColumnsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    rowData: PropTypes.shape().isRequired,
};

export default Row;
