import './App.css';
import { Title } from './components/Item/Item.style';
import ItemList from './components/ItemList/ItemList';
import StatisticList from './components/StatisticList/StatisticList';

const statistics = [
  {
    title: 'earnings',
    metric: '$ 315.2',
  },
  {
    title: 'orders',
    metric: '16',
  },
  {
    title: 'sessions',
    metric: '463',
  },
  {
    title: 'users',
    metric: '17',
  },
];

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

function App() {
  return (
    <div className='App'>
      <Title className='title'>Green Healthy Shop</Title>
      <h3>Statistics</h3>
      <StatisticList statistics={statistics} />
      <h3>Product Sales</h3>
      <ItemList items={items} />
    </div>
  );
}

export default App;
