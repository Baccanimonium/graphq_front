import React from 'react';

export default [
    {
        key: 'image',
        format: (item) => (
            <img src={item[0]} alt="item img" width="200" />
        ),
    },
    {
        key: 'name',
        label: 'Name',
    },
    {
        key: 'price',
        label: 'Price',
        format: (item) => `$${item}`,
    },
    {
        key: 'SelectedQuantity',
        label: 'Quantity',
    },
];
