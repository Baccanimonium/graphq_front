import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AutoSizer, CellMeasurer, CellMeasurerCache, createMasonryCellPositioner, Masonry } from 'react-virtualized';
import ImageMeasurer from 'react-virtualized-image-measurer';
import { graphql } from 'react-apollo';


import { MasonryWrapper, ItemData, Price, ItemTitle } from './UiComponents';
import { PRODUCT_PAGE } from '../../config';
import { GET_PRODUCTS } from '../../graphQl/schema';

const itemsPerLoad = 15;
const sortDirection = 'desc';

class IndexPage extends Component {
    static propTypes = {
        getProducts: PropTypes.shape({}).isRequired,
    };

    constructor(props) {
        super(props);
        this.defaultHeight = 300;
        this.columnCount = 3;
        this.itemsWithSizes = {};
        this.state = {
            columnWidth: 300,
            page: 0,
        };
        this.cache = new CellMeasurerCache({
            defaultHeight: 300,
            defaultWidth: 300,
            fixedWidth: true,
        });
        this.cellPositioner = createMasonryCellPositioner({
            cellMeasurerCache: this.cache,
            columnCount: this.columnCount,
            // eslint-disable-next-line react/destructuring-assignment
            columnWidth: this.state.columnWidth,
        });
    }

    handleScroll = ({ clientHeight, scrollTop }) => {
        const { getProducts: { loading, fetchMore } } = this.props;
        const { page } = this.state;
        if (scrollTop % clientHeight > clientHeight / 3
            && !loading
            && page === Math.floor(scrollTop / clientHeight)) {
            this.setState((prevState) => ({ page: prevState.page + 1 }));
            const newPageLimitsCount = (page + 2) * itemsPerLoad;
            fetchMore({
                variables: {
                    skip: newPageLimitsCount - itemsPerLoad,
                    limit: newPageLimitsCount,
                    lastPurchase: sortDirection,
                },
                updateQuery: (prev, { fetchMoreResult }) => Object.assign(
                    {}, prev, { getProducts: [...prev.getProducts, ...fetchMoreResult.getProducts] }
                ),
            });
        }
    };

    onResize = ({ width }) => {
        this.setState({ columnWidth: width / 3 });
        this.cache.clearAll();
        this.cellPositioner.reset({
            columnCount: this.columnCount,
            columnWidth: width / 3,
            spacer: 0,
        });
        this.masonryRef.clearCellPositions();
    };

    cellRenderer = ({ index, key, parent, style }) => {
        const { columnWidth } = this.state;
        const { item, size } = this.itemsWithSizes[index];
        const imgHeight = columnWidth * (size.height / size.width);
        return (
            <CellMeasurer cache={this.cache} rowIndex={index} key={key} parent={parent}>
                {({ measure }) => (
                    <div style={style}>
                        <Link to={`${PRODUCT_PAGE}/${item.id}`}>
                            <ItemData
                                style={{
                                    height: imgHeight,
                                    width: columnWidth,
                                }}
                            >
                                <Price>{item.price}</Price>
                                <ItemTitle>{item.name}</ItemTitle>
                            </ItemData>
                            <img
                                onLoad={measure}
                                src={item.image[0]}
                                alt={item.name}
                                style={{
                                    height: imgHeight,
                                    width: columnWidth,
                                    display: 'block',
                                }}
                            />
                        </Link>
                    </div>
                )}
            </CellMeasurer>
        );
    };

    keyMapper = (index) => {
        const { getProducts: { getProducts = [] } } = this.props;

        return getProducts[index].id;
    };

    render() {
        const { columnWidth } = this.state;
        const { getProducts: { getProducts = [] } } = this.props;
        return (
            <MasonryWrapper>
                <AutoSizer onResize={this.onResize}>
                    {({ height, width }) => (
                        <ImageMeasurer
                            items={getProducts}
                            image={(item) => item.image[0]}
                            onError={(error, item, src) => {
                                console.error(
                                    'Cannot load image',
                                    src,
                                    'for item',
                                    item,
                                    'error',
                                    error
                                );
                            }}
                            defaultHeight={this.defaultHeight}
                            defaultWidth={columnWidth}
                        >
                            {({ itemsWithSizes }) => {
                                this.itemsWithSizes = itemsWithSizes;
                                return (
                                    <Masonry
                                        cellCount={itemsWithSizes.length}
                                        keyMapper={this.keyMapper}
                                        cellMeasurerCache={this.cache}
                                        cellPositioner={this.cellPositioner}
                                        cellRenderer={this.cellRenderer}
                                        height={height}
                                        width={width}
                                        onScroll={this.handleScroll}
                                        ref={(ref) => { this.masonryRef = ref; }}
                                    />
                                );
                            }}
                        </ImageMeasurer>
                    )}
                </AutoSizer>
            </MasonryWrapper>
        );
    }
}

export default graphql(GET_PRODUCTS, {
    name: 'getProducts',
    options: {
        variables: {
            skip: 0,
            limit: itemsPerLoad,
            lastPurchase: sortDirection,
        },
    },
})(IndexPage);
