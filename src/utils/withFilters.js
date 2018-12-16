import React, { PureComponent } from 'react';

export default (OriginalComponent) => class AccordionMenuItems extends PureComponent {
    state = {
        filters: {},
    };

    getNewFilterValue = (filterArr = [], inputtedValue) => {
        const newArr = (filterArr.includes(inputtedValue))
            ? filterArr.filter((item) => item !== inputtedValue)
            : [...filterArr, inputtedValue];
        return newArr.length > 0 ? newArr : undefined;
    };

    setFilters = (filterKey, filterValue) => {
        this.setState((prevState) => {
            const nextValue = typeof filterValue === 'object'
                ? filterValue
                : this.getNewFilterValue(prevState.filters[filterKey], filterValue);
            return ({ filters: { ...prevState.filters, [filterKey]: nextValue } });
        });
    };

    render() {
        return (
            <OriginalComponent
                {...this.props}
                {...this.state}
                setFilters={this.setFilters}
            />
        );
    }
};
