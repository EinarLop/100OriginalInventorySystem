import React, { Component } from 'react';
import styles from '../CreateSaleStyles.module.scss';
function ProductSalePreview(props){
        return (
            <div className={styles.saleWrapper}>
                <img className={styles.image} alt="Watch"src="https://cdn.shopify.com/s/files/1/0258/3088/3407/products/AR1737_01.jpg?v=1589472110" />
                <p>{props.product_code}</p>
                <p>10</p>
                <p>{props.unit_price}</p>
            </div>
        );
}

export default ProductSalePreview;