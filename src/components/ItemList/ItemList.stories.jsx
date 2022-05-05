import React from 'react';
import ItemList from './ItemList';

export default {
  title: 'ItemList',
  component: ItemList,
};

const items = [
  {
    image: 'https://media.fds.fi/product_image/800/12_24h_iso.jpg',
    title: 'White Coffee Mug',
    salesNumber: '1972',
  },
  {
    image:
      'https://pyxis.nymag.com/v1/imgs/a73/1dc/47a600af8f85aa856f31d4a6c87f0c0352-Vivreal-glass.rhorizontal.w600.jpg',
    title: 'Good Glass Teapot',
    salesNumber: '4024',
  },
  {
    image:
      'https://ambientairshop.com/wp-content/uploads/2022/01/8436551848082-VV040TVLC-Green-Tea-Lime-01.jpg',
    title: 'Aromatic Green Candle',
    salesNumber: '2701',
  },
  {
    image:
      'https://www.cuckooland.com/dnc/cuckooland/artwork/product_images/Kreafunk-aWEAR-Wirless-Headphones-in-Cool-Grey.jpg?scale=canvas&quality=90&width=1000&height=1000',
    title: 'Wireless On-Ear Headphones',
    salesNumber: '1543',
  },
];

export const Default = () => <ItemList items={items} />;
