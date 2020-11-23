import React, { Component } from 'react';
import styles from './CreateSaleStyles.module.scss';

class CreateSale extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className={styles.Wrapper}>
                <div className ={styles.Form}>
                    <h1>Create sale</h1>
                    <div className={styles.FormCS}>
                        <input className={styles.Input} placeholder="Date of sale"></input>
                        <select className={styles.List}>
                            <option>Amazon</option>
                            <option>Mercado libre</option>
                            <option>La welmar</option>
                        </select>
                    </div>
                    <div className={styles.productWrapper}>
                        <input className={styles.InputCS} placeholder="Product"></input>
                        <input className={styles.InputCS} placeholder="Quantity"></input>
                        <button className={styles.Button}>Add product</button>
                    </div>
                    <div className={styles.saleWrapper}>
                        <p>CAS2020</p>
                        <p>1000</p>
                        <p>10,000</p>
                        <div>
                            <button className={styles.Button}>Delete</button>
                        </div>
                    </div>
                        
                    
                    <button className={styles.Button}>Create sale</button>
                </div>
            </div>
            );

    }
}

export default CreateSale;