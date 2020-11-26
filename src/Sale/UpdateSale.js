import React, { Component } from 'react';
import styles from './UpdateSaleStyles.module.scss';
import SalePreview from './Components/SalePreview'
import axios from 'axios';
import ProductSalePreview from './Components/ProductSalePreview';
import { Redirect } from "react-router-dom";


class UpdateSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_sale: "",
            date: "",
            id_platform:"",
            total: 0,
            products_sale: [], 
            products:[],
            id_product: "", 
            redirect: false,
            message: '',
        }
        this.deleteSale = this.deleteSale.bind(this);
    }
   

    componentDidMount(){
    // Get the cross-references of id_sale
    axios.get("http://localhost:3010/productsale/" +  this.props.match.params.id)
    .then(response => {
        this.setState(
            {
                products_sale: response.data
            }) 
            console.log(response.data)
           this.getProducts();
    })

    // Get sale information of id_sale
    axios.get("http://localhost:3010/sale/" +  this.props.match.params.id)
    .then(response => {
        this.setState( 
            {
                id_sale:response.data[0].id_sale,
                date: response.data[0].date.slice(0,10),
                id_platform: response.data[0].id_platform,
                total: response.data[0].total,
            }) 
            console.log(response.data)
    })
    }


    getProducts(){
        this.state.products_sale.forEach(product => {
        axios.get("http://localhost:3010/product/" + product.id_product)
        .then(response => {
            this.setState(
                {
                products: this.state.products.concat(response.data[0]),
                }
                           
            )
                       
            })
        });
    }

    deleteSale(){
        axios.delete("http://localhost:3010/sale/" + this.state.id_sale)
        .then(response => {
          let msg = <p style={{color: 'green'}}>Sale deleted succesfully!</p>;      
          
          this.setState({
                  message: msg
                })
                  setTimeout(() => this.setState({ redirect: true }), 2000);
        });
    }
    
    render() {
        return (
          this.state.redirect ? <Redirect to="/showsales"/>:
          
          <div className={styles.Wrapper}>
            <div className={styles.Form}>
              <h1>Sale details</h1>
              <div className={styles.dataWapper}>
                <p>{this.state.date}</p>
                <p>Total: ${this.state.total}</p>
                <p>{this.state.id_platform}</p>
              </div>         

              <div className={styles.Menu}>
                <div className={styles.Container}>Image</div>
                <div className={styles.Container}>Product Code</div>
                <div className={styles.Container}>Quantity</div>
                <div className={styles.Container}>Unit Price</div>
              </div>

              {this.state.products.length ? this.state.products.map((product, counter) => (
                <ProductSalePreview
                  product_code={product.product_code}
                  unit_price={product.unit_price}
                  img_url={product.img_url}
                  quantity={this.state.products_sale[counter].quantity}
                />
              )) : <div>No products</div>}
              <div className={styles.buttonWrapper}>
                {this.state.message}
                <button className={styles.Button} onClick={this.deleteSale}>Delete</button>
              </div>
            </div>
          </div>
        );
    }
}       // note: sale.quantity and product_sale are not matched in the map() function,
        // because both arrays are not in same order. Fix later

export default UpdateSale;