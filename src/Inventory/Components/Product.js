import React from 'react'
import { Link } from "react-router-dom";

import styles from './ProductStyles.module.scss';
function Product(props) {
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} alt="Watch"src={props.url} />

            <h2 className={styles.productCode} >{props.productCode}</h2>
            <div className={styles.unitPriceWrapper}>
                <p>Unit price:</p>
                <p> {props.unitPrice}</p>
            </div>

            <div className={styles.stockWrapper}>
                <p >Stock: </p>
                <p>{props.stock}</p>
            </div>

            <Link className={styles.Link} to={"/updateproduct/" + props.id }>Details</Link>
            
        </div>

    );
}

export default Product;