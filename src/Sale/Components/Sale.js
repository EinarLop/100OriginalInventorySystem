import React, { Component } from 'react';
import styles from '../CreateSaleStyles.module.scss';
function Sale(props){
        return (
            <div className={styles.saleWrapper}>
                <p>{props.product_code}</p>
                <p>{props.quantity}</p>
                <p>10,000</p>
                <div>
                    <button className={styles.Button}>Delete</button>
                </div>
            </div>
        );
}

export default Sale;