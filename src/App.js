import './App.css';
import { Title } from './components/Item/Item.style';
import ItemList from './components/ItemList/ItemList';
import StatisticList from './components/StatisticList/StatisticList';
import { items, statistics } from './data/data';

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
