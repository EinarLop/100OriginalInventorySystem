import React, { Component } from 'react';
import styles from './UpdateSaleStyles.module.scss';

class UpdateSale extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className={styles.Wrapper}>
                <div className ={styles.Form}>
                    <h1>Update sale</h1>
                    <input className={styles.Input} placeholder="Date"></input>
                    <input className={styles.Input} placeholder="Quantity"></input>
                    <input className={styles.Input} placeholder="Total"></input>
                    <input className={styles.Input} placeholder="ID Platform"></input>
                    <div className={styles.buttonWrapper}>
                        <button className={styles.Button}>Update</button>
                        <button className={styles.Button}>Delete</button>
                    </div>
                    
                </div>
            </div>
            );

    }
}

export default UpdateSale;


