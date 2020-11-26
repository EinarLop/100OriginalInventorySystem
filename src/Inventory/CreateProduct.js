import React, { Component } from 'react';
import styles from './CreateProductStyles.module.scss';
import axios from 'axios'
import { Redirect } from "react-router-dom";

class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      product: {},
      productCode: "",
      unitPrice: "",
      unitCost: "",
      stock: "",
      url: "",
      message: "",
      redirect: false,
    };
  }

  onChange(e, val) {
    this.setState({
      [val]: e.target.value,
    });
    this.setState({
      message: "",
    });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.productCode==="" || this.state.unitPrice==="" || this.state.unitCost==="" ||
        this.state.stock==="" || this.state.url===""){
            let msg = <p style={{color: "red"}}>Required fields are in blank</p>
            this.setState({
                message: msg
            })
            return;
        }

    const product = {
      id_product: null,
      product_code: this.state.productCode,
      unit_price: this.state.unitPrice,
      unit_cost: this.state.unitCost,
      stock: this.state.stock,
      img_url: this.state.url,
      id_supplier: this.state.supplier,
    };
    
    let cookieValue = this.readCookie("100Orig-Id");

    axios
      .post("https://api100originalinventorysystem.herokuapp.com/product/" + "?admin=" + cookieValue, product)
      .then((res) => {
        let msg = (
          <p style={{ color: "green" }}>Product was succesfully registered!</p>
        );
        this.setState({
          message: msg,
        });
        console.log(res.data);

        // A continuación redirigir a showProducts
        setTimeout(() => this.setState({ redirect: true }), 2000);
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          window.location = "/";
        }
      });
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/showproducts" />
    ) : (
      <div className={styles.Wrapper}>
        <p className={styles.Title}>Create product</p>

        <div className={styles.Form}>
          <input
            placeholder="Product Code"
            className={styles.Input}
            type="text"
            onChange={(e) => this.onChange(e, "productCode")}
          />

          <input
            placeholder="Unit Price"
            className={styles.Input}
            type="text"
            onChange={(e) => this.onChange(e, "unitPrice")}
          />

          <input
            placeholder="Unit Cost"
            className={styles.Input}
            type="text"
            onChange={(e) => this.onChange(e, "unitCost")}
          />

          <input
            placeholder="Stock"
            className={styles.Input}
            type="text"
            onChange={(e) => this.onChange(e, "stock")}
          />

          <input
            placeholder="Url"
            className={styles.Input}
            type="text"
            onChange={(e) => this.onChange(e, "url")}
          />

          {this.state.message}

          <button className={styles.Button} onClick={this.onSubmit}>
            Create product
          </button>
        </div>
      </div>
    );
  }

  readCookie = (cookieName) => {
    let len = cookieName.length;
    let cookies = document.cookie.split(";");
    let value = null;
    for (let i = 0; i < cookies.length; i++) {
      const c = cookies[i];
      if (c.substring(0, len) === cookieName) value = c.substring(len + 1);
      console.log(value);
    }
    return value;
  };
}
 
/*                <input 
                    placeholder="Supplier" 
                    className={styles.Input} 
                    type="text"
                    onChange={(e) => this.onChange(e, "supplier")}/> */
export default CreateProduct;