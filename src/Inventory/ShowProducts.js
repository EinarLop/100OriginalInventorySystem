import React, { Component } from 'react';
import axios from 'axios';
import Product from './Components/Product'
import styles from './ShowProductsStyles.module.scss';

class ShowProducts extends Component {
constructor(props) {
        super(props);
        this.state = {
        }
    }
   




    render() { 
        return (
            <div className={styles.Wrapper}>
            <Product/>
            <Product/>
            <Product/>  
            <Product/>  
            <Product/>
            <Product/> 
            </div>
        
        
        );

    }

}
 
export default ShowProducts;