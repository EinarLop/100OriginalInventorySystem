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
axios.get("http://localhost:3010/product")
.then(response => { 
    this.setState(
        {
            products: response.data
        })
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
    

}
 
export default ShowProducts;