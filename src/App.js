import Header from "./GlobalComponents/Header"
import Product from "./Inventory/Components/Product"
import SearchBar from "./GlobalComponents/SearchBar"
import './App.css';
import ShowProducts from "./Inventory/ShowProducts";
import CreateProduct from "./Inventory/CreateProduct"

function App() {
  return (
    <div className="App">
    
       <Header color="yellow" />

      <CreateProduct/>
      <ShowProducts/>
      
      <SearchBar/>
      <Product />
      <Product />
      


    </div>
  );
}

export default App;
