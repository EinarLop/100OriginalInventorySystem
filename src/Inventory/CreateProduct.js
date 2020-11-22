import React, { Component } from 'react';
import styles from './CreateProductStyles.module.scss';

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className={styles.Wrapper}>

                <h1>Create product</h1>
                
                <div className={styles.Form}>
                <input placeholder="Product Code" className={styles.Input} type="text"/>   
                <input placeholder="Unit Price" className={styles.Input} type="text"/>
                <input placeholder="Unit Cost" className={styles.Input} type="text"/>
                <input placeholder="Stock" className={styles.Input} type="text"/>
                <input placeholder="Url" className={styles.Input} type="text"/>
                <input placeholder="Supplier" className={styles.Input} type="text"/>

                 <button className={styles.Button}>Test</button>
                </div>
           
           
            </div>
            );

    }
}
 
export default CreateProduct;