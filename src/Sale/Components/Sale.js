import React, { Component } from 'react';
import styles from '../CreateSaleStyles.module.scss';
function Sale(props){
        return (
            <div className={styles.saleWrapper}>
                <p>{props.product_code}</p>
                <p>{props.quantity}</p>
                <p>{props.unit_price}</p>
                <div>
                    <button className={styles.Button} onClick={props.function}>Delete</button>
                </div>
            </div>
        );
}

export default Sale;