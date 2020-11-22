import Header from "./GlobalComponents/header"
import Product from "./Inventory/product"
import SearchBar from "./GlobalComponents/searchBar"
import './App.css';
import WatchList from "./GlobalComponents/watchList";

function App() {
  return (
    <div className="App">
    
      <Header color="yellow" />

      
      <WatchList/>

      <SearchBar/>
      <Product />
      <Product />
      


    </div>
  );
}

export default App;
