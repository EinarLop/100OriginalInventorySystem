import Header from "./GlobalComponents/Header"
import Product from "./Inventory/Components/Product";
import SearchBar from "./GlobalComponents/SearchBar"
import './App.css';
import ShowProducts from "./Inventory/ShowProducts";
import CreateProduct from "./Inventory/CreateProduct"
import UpdateProduct from "./Inventory/UpdateProduct"
import CreateSale from "./Sale/CreateSale";
import ShowSales from "./Sale/ShowSales";
import CreateSupplier from "./Supplier/CreateSupplier"
import ShowSuppliers from "./Supplier/ShowSupplier"
import Footer from "./GlobalComponents/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
   
    <Router>
        <Header color="yellow" />
        {/* <SearchBar/> */}
      <Switch>
         <Route exact path="/createproduct" component={CreateProduct}/>
         <Route exact path="/showproducts" component={ShowProducts}/>
         <Route exact path="/createsale" component={CreateSale}/>
         <Route exact path="/showsales" component={ShowSales}/>
         <Route exact path="/createsupplier" component={CreateSupplier}/>
         <Route exact path="/showsuppliers" component={ShowSuppliers}/>
        <Route exact path="/updateproduct/:id" component={UpdateProduct} />

      </Switch>
    </Router>

    {/* <Footer/> */}

    </div>
  );
}

export default App;
