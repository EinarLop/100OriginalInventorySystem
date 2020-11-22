import React from 'react'

import styles from './ProductStyles.module.scss';
function Product(props) {
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} alt="Watch"src="https://cdn.shopify.com/s/files/1/0258/3088/3407/products/AR1737_01.jpg?v=1589472110" />

            <h2 className={styles.productCode} >{props.productCode}</h2>
            <div className={styles.unitPriceWrapper}>
                <p>Unit price:</p>
                <p> {props.unitPrice} $1229 </p>
            </div>

            <div className={styles.stockWrapper}>
                <p >Stock: </p>
                <p>{props.stock}10</p>
            </div>

            <button className={styles.button}>Register Sale</button>


        </div>


    );
}

export default Product;