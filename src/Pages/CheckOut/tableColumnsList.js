import React from 'react';

export default [
    {
        key: 'img',
        format: (item) => (
            <img src={item} alt="item img" width="150" />
        ),
    },
    {
        key: 'name',
        label: 'Name',
    },
    {
        key: 'price',
        label: 'Price',
    },
    {
        key: 'quantity',
        label: 'Quantity',
    },
];
