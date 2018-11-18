import React from 'react';
import PropTypes from 'prop-types';
import { Th, Thead } from './UiComponents';

function columnWidth (columnsList) {
    return 100 / columnsList.length;
}

function TableHeader(props) {
    const { tableColumnsList } = props;
    const columnWth = columnWidth(tableColumnsList);
    return (
        <Thead>
            <tr>
                {tableColumnsList.map(({ cellHeadProps = {}, key, label }, index) => (
                    <Th
                        firstInRow={index === 0}
                        {...cellHeadProps}
                        key={key}
                        param={key}
                        columnWth={columnWth}
                    >
                        {label}
                    </Th>
                ))}
            </tr>
        </Thead>
    );
}

TableHeader.propTypes = {
    tableColumnsList: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,
};

export default React.memo(TableHeader);
