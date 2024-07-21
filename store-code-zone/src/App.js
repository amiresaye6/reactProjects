import './App.css';
import ProductsList from './components/productsList/ProductsList';
import Header from './components/header/Header';
import SearchPar from './components/searchPar/SearchPar';
import Filters from './components/filters/Filters';

function App() {
  return (
    <div className="App">
      <Header logo="amir"/>
      <SearchPar />
      <Filters />
      <ProductsList />
    </div>
  );
}

export default App;
