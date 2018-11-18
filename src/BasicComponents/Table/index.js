import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { Table } from 'BasicComponents/Table/UiComponents';
import TableHeader from './TableHeader';
import Row from './Row';

class TableComponent extends Component {
    render() {
        const { tableColumnsList, data, ...props } = this.props;
        const rows = data.map((rowData) => (
            <Row
                key={shortid.generate()}
                rowData={rowData}
                tableColumnsList={tableColumnsList}
                {...props}
            />
        ));
        return (
            <Table>
                <TableHeader
                    tableColumnsList={tableColumnsList}
                />
                <tbody>
                    {rows}
                </tbody>
            </Table>
        );
    }
}

TableComponent.propTypes = {
    tableColumnsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TableComponent;
