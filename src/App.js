import './App.css';
import ItemList from './components/ItemList/ItemList';
import StatisticList from './components/StatisticList/StatisticList';
import Title from './components/Title/Title';
import { items, statistics } from './data/data';

function App() {
  return (
    <div className='App'>
      <Title title='Green Healthy Shop' />
      <h3>Statistics</h3>
      <StatisticList statistics={statistics} />
      <h3>Product Sales</h3>
      <ItemList items={items} />
    </div>
  );
}

export default App;
