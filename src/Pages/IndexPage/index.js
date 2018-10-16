import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AutoSizer, CellMeasurer, CellMeasurerCache, createMasonryCellPositioner, Masonry } from 'react-virtualized';
import ImageMeasurer from 'react-virtualized-image-measurer';
import { MasonryWrapper, ItemData, Price, ItemTitle } from './UiComponents';
import { PRODUCT_PAGE } from '../../config';

import img1 from '../../../amado/img/bg-img/1.jpg';
import img2 from '../../../amado/img/bg-img/2.jpg';
import img3 from '../../../amado/img/bg-img/3.jpg';
import img4 from '../../../amado/img/bg-img/4.jpg';
import img5 from '../../../amado/img/bg-img/5.jpg';
import img6 from '../../../amado/img/bg-img/6.jpg';
import img7 from '../../../amado/img/bg-img/7.jpg';
import img8 from '../../../amado/img/bg-img/8.jpg';
import img9 from '../../../amado/img/bg-img/9.jpg';

// Array of images with captions
const list = [
    { source: img1, caption: '1Modern Chair', imageHeight: '250', imageWidth: '250', price: 'From $180', id: 'asdasdas11' },
    { source: img2, caption: '2Minimalistic Plant Pot', imageHeight: '250', imageWidth: '250', price: 'From $180', id: 'asdasdas22' },
    { source: img3, caption: '3Modern Chair', imageHeight: '250', imageWidth: '250', price: 'From $180', id: 'asdasdas33' },
    { source: img4, caption: '4Night Stand', imageHeight: '250', imageWidth: '250', price: 'From $180', id: 'asdasdas44' },
    { source: img5, caption: '5Plant Pot', imageHeight: '250', imageWidth: '250', price: 'From $18', id: 'asdasdas55' },
    { source: img6, caption: '6Small Table', imageHeight: '250', imageWidth: '250', price: 'From $320', id: 'asdasdas66' },
    { source: img7, caption: '7Metallic Chair', imageHeight: '250', imageWidth: '250', price: 'From $320', id: 'asdasdas77' },
    { source: img8, caption: '8Modern Rocking Chair', imageHeight: '250', imageWidth: '250', price: 'From $320', id: 'asdasdas88' },
    { source: img9, caption: '9Home Deco', imageHeight: '250', imageWidth: '250', price: '$318', id: 'asdasdas99' },
];


const keyMapper = (index) => list[index].id;
// Default sizes help Masonry decide how many images to batch-measure

// Our masonry layout will use 3 columns with a 10px gutter between


class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.defaultHeight = 300;
        this.columnCount = 3;
        this.itemsWithSizes = {};
        this.state = {
            columnWidth: 300,
        };
        this.cache = new CellMeasurerCache({
            defaultHeight: 300,
            defaultWidth: 300,
            fixedWidth: true,
        });
        this.cellPositioner = createMasonryCellPositioner({
            cellMeasurerCache: this.cache,
            columnCount: this.columnCount,
            columnWidth: this.state.columnWidth,
        });
    }

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
                                <ItemTitle>{item.caption}</ItemTitle>
                            </ItemData>
                            <img
                                onLoad={measure}
                                src={item.source}
                                alt={item.caption}
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

    render() {
        const { columnWidth } = this.state;

        return (
            <MasonryWrapper>
                <AutoSizer onResize={this.onResize}>
                    {({ height, width }) => (
                        <ImageMeasurer
                            items={list}
                            image={(item) => item.source}
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
                                        keyMapper={keyMapper}
                                        cellMeasurerCache={this.cache}
                                        cellPositioner={this.cellPositioner}
                                        cellRenderer={this.cellRenderer}
                                        height={height}
                                        width={width}
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

IndexPage.propTypes = {};

export default IndexPage;
