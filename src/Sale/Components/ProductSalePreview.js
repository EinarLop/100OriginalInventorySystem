import React, { Component } from 'react';
import styles from "./ProductSalePreviewStyles.module.scss";
function ProductSalePreview(props){
    console.log(props.img_url);
        return (
          <div className={styles.Wrapper}>
            <div className={styles.Container}>
              <div className={styles.ContainerImage}>
                <img
                  width="50px"
                  height="85x"
                  className={styles.image}
                  src={props.img_url}
                />
              </div>
            </div>
            <div className={styles.Container}>{props.product_code}</div>
            <div className={styles.Container}>{props.quantity}</div>
            <div className={styles.Container}>{props.unit_price}</div>
          </div>
        );
}

export default ProductSalePreview;