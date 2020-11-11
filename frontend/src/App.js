import Header from "./GlobalComponents/header"
import Product from "./Inventory/product"
import SearchBar from "./GlobalComponents/searchBar"
import './App.css';

function App() {
  return (
    <div className="App">

      <Header color="yellow" />
      <SearchBar/>
      <Product />
      <Product />
      

    </div>
  );
}

export default App;
