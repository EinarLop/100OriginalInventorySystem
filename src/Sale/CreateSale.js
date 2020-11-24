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
    this.onSubmit = this.onSubmit.bind(this);
    this.searchProduct = this.searchProduct.bind(this);
    this.createSale = this.createSale.bind(this);
    this.deleteProduct= this.deleteProduct.bind(this);

    this.state = {
      products: [],
      input_code: "",
      input_quantity: "",
      input_platform: "Amazon",
    };
  }

  onChange(e, val) {
    this.setState({
      [val]: e.target.value,
    });
    console.log(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    const product = {
      product_code: this.state.product_code,
      quantity: this.state.quantity,
    };
  }

  createSale(e) {
    e.preventDefault();
    // validar inputs de state.products

    const id = uuidv4();
    const today = new Date().toISOString().slice(0, 10);
    const productTotal = 0;
    
    this.state.products.forEach(product => productTotal += product.total);

    const sale = {
      id_sale: id,
      date: today,
      total: productTotal,
      id_platform: this.state.input_platform,
    };

    axios.post("http://localhost:3010/sale", sale)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Try again later: " + error);
      });
  }

  searchProduct(e) {
    e.preventDefault();

    axios
      .get("http://localhost:3010/product/code/" + this.state.input_code)
      .then((response) => {
            const newProduct = {
            product_code: this.state.input_code,
            quantity: this.state.input_quantity,
            total: response.data[0].unit_price * this.state.input_quantity,
            };

        this.setState({
            products: this.state.products.concat(newProduct),
        });
        console.log(this.state.products);
        
        }).catch((error) => {
        if (error) {
          console.log(error);
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
            <input className={styles.Input} placeholder="Date of sale"></input>
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
            <button className={styles.Button} onClick={this.searchProduct}>
              Add product
            </button>
          </div>
          {this.state.products.map((product, counter) => (
            <div key={counter}>
              <Sale
                product_code={product.product_code}
                quantity={product.quantity}
                total={product.total}
                function={() => this.deleteProduct(product)}
              />
            </div>
          ))}

          <button className={styles.Button} onClick={this.createSale}>
            Create sale
          </button>
        </div>
      </div>
    );
  }
}

export default CreateSale;