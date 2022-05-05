import React from 'react';
import Item from './Item';

export default {
  title: 'Item',
  component: Item,
};

export const Default = () => (
  <Item
    image='https://media.fds.fi/product_image/800/12_24h_iso.jpg'
    title='White coffee mug'
    salesNumber='1972'
  />
);
