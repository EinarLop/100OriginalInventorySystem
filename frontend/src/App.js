import Header from "./GlobalComponents/header"
import Product from "./Inventory/product"
import './App.css';
import WatchList from "./GlobalComponents/watchList";

function App() {
  return (
    <div className="App">
    
      <Header color="yellow" />
      
      <WatchList/>
    </div>
  );
}

export default App;
