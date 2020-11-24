import React, { Component } from 'react';
import styles from './CreateSaleStyles.module.scss';
import axios from 'axios'
import {v4 as uuidv4} from 'uuid';
import Sale from './Components/Sale';


class CreateSale extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  
    this.searchProduct = this.addProduct.bind(this);
    this.createSale = this.createSale.bind(this);
    this.deleteProduct= this.deleteProduct.bind(this);
    this.createCrossRef= this.createCrossRef.bind(this);

    this.state = {
      products: [],
      input_date: new Date().toISOString().slice(0, 10),
      input_code: "",
      input_quantity: "",
      input_platform: "Amazon",
      id_product:"",
      error_msg:"",
    };
  }

  onChange(e, val) {
    this.setState({
      [val]: e.target.value,
    });
  }

  createSale(e) {
    e.preventDefault();
    // validar inputs de state.products
    let msg = '';
    if (this.state.input_date==='' || !Date(this.state.input_date)){
      console.log("Date validation error");
      msg = <p style={{color: 'red'}}>Date format must be YYYY-MM-DD</p>;
      this.setState({error_msg: msg});
      return;
    }

    const id = uuidv4();
    const today = new Date().toISOString().slice(0, 10);    // 2020-11-23
    let productTotal = 0;
    
    this.state.products.forEach(product => productTotal += product.total);

    const sale = {
      id_sale: id,
      date: today,
      total: productTotal,
      id_platform: this.state.input_platform
    };
    console.log(sale)

    axios.post("http://localhost:3010/sale", sale)
      .then((response) => {
        this.createCrossRef(id);
      })
      .catch((error) => {
        console.log("Try again later: " + error);
      });
  }

  createCrossRef(id){
    this.state.products.forEach(product => {
     const product_sale = {
        id_product: product.id_product,
        id_sale: id
      }
    
      axios.post("http://localhost:3010/productsale", product_sale)
      .then((response) => {
        msg = <p style={{color: 'green'}}>Sale registered succesfully!</p>;
        this.setState({error_msg: msg})
        console.log(response);
      })
      .catch((error) => {
        console.log("Try again later: " + error);
      });
    }      
      );
  }

  addProduct(e) {
    e.preventDefault();
    let err = '';
    if (this.state.input_quantity==="" || !Number(this.state.input_quantity)){
      console.log("Qty validation error");
      err = <p style={{color: 'red'}}>Quantity must be a number</p>;
      this.setState({error_msg: err});
      return;
    }    
    this.setState({error_msg: err});

    axios.get("http://localhost:3010/product/code/" + this.state.input_code)
      .then((response) => {
        if (response.data === "No results"){
          err = <p style={{color: 'red'}}>No Product Code found.</p>;
          this.setState({error_msg: err});
        } else{
          const newProduct = {
            id_product: response.data[0].id_product,
            product_code: this.state.input_code,
            quantity: this.state.input_quantity,
            unit_price: response.data[0].unit_price,
            total: response.data[0].unit_price * this.state.input_quantity,
            };
    
            this.setState({
                products: this.state.products.concat(newProduct),
            });
            console.log(this.state.products);
        }

        }).catch((error) => {
        if (error) {
          throw error;
        } 
      });
  }


  deleteProduct(product){
    var array = [...this.state.products]; // make a separate copy of the array
    var index = array.indexOf(product);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ products: array });
    }
  }
  /*this.setState({
      devoirs: [...this.state.devoirs.filter(item=> item.id !== id)]
    }) */


  render() {
    return (
      <div className={styles.Wrapper}>
        <div className={styles.Form}>
          <h1>Create sale</h1>
          <div className={styles.FormCS}>
            <input className={styles.Input} placeholder="Date of sale"
            onChange={(e) => this.onChange(e, "input_date")}
            value={this.state.input_date}/>
            <select
              className={styles.List}
              onChange={(e) => this.onChange(e, "input_platform")}>
              <option>Amazon</option>
              <option>Mercado libre</option>
              <option>Wal-mart</option>
            </select>
          </div>
          <div className={styles.productWrapper}>
            <input
              className={styles.InputCS}
              placeholder="Product"
              onChange={(e) => this.onChange(e, "input_code")}
            ></input>
            <input
              className={styles.InputCS}
              placeholder="Quantity"
              onChange={(e) => this.onChange(e, "input_quantity")}
            ></input>
            <button className={styles.Button} onClick={(e) => this.addProduct(e)}>
              Add product
            </button>
          </div>
          {this.state.products.map((product, counter) => (
            <div key={counter}>
              <Sale
                product_code={product.product_code}
                unit_price={product.unit_price}
                quantity={product.quantity}
                total={product.total}
                function={() => this.deleteProduct(product)}
              />
            </div>
          ))}

          {this.state.error_msg}

          <button className={styles.Button} onClick={this.createSale}>
            Create sale
          </button>
        </div>
      </div>
    );
  }
}

export default CreateSale;