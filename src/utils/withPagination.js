import React, { PureComponent } from 'react';

export default (OriginalComponent) => class AccordionMenuItems extends PureComponent {
    state = {
        page: 1,
        limit: 4,
        skip: 0,
    };

    setPage = ({ target: { value: page } }) => {
        const { limit } = this.state;
        this.setState({ page, skip: (page - 1) * limit });
    };

    setFetchingLimit = (limit) => {
        this.setState({ limit });
    };

    render() {
        return (
            <OriginalComponent
                {...this.props}
                {...this.state}
                setPage={this.setPage}
                setFetchingLimit={this.setFetchingLimit}
            />
        );
    }
};
