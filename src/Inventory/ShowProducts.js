import React, { Component } from 'react';
import axios from 'axios';
import Product from './Components/Product'
import styles from './ShowProductsStyles.module.scss';
import {Link} from 'react-router-dom';

class ShowProducts extends Component {
constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
   
componentDidMount(){

    let cookieValue = this.readCookie('100Orig-Id');
    axios.get("https://api100originalinventorysystem.herokuapp.com/product/" + "?admin=" + cookieValue)
    .then(response => { 
        this.setState(
            {
                products: response.data
            })            
        })
        .catch(error => {
            console.log(error.response.status);
            if (error.response.status === 401) {
                window.location = "/";
            }
        })
};

    render() { 
        return (
            <div>

                <div className={styles.divF}>
                    <div className={styles.fakeButton}>
                            <Link to='/createproduct' className={styles.Link}>Create product</Link>
                    </div>
                </div>

                <div className={styles.Wrapper}>
                {this.state.products.length ? (this.state.products.map((product) => (
                <Product
                    productCode={product.product_code}
                    stock={product.stock}
                    unitPrice={product.unit_price}
                    id={product.id_product}
                    url={product.img_url}
                />
                
                )   
                )) : <div>No products!</div> 
            }
            
                </div>
            </div>
        );

    }
    
    readCookie = (cookieName) => {
        let len = cookieName.length
        let cookies = document.cookie.split(';');
        let value = null
        for (let i = 0; i < cookies.length; i++) {
            const c = cookies[i];
            if (c.substring(0,len) === cookieName)
                value = c.substring(len+1)
                console.log(value)
        }
        return value;
    }
}
 
export default ShowProducts;