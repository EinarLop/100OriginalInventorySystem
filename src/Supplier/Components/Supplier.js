import React from 'react'

import styles from '../SupplierStyles.module.scss';

export default function Supplier(props) {


    return (
        <div className={styles.wrapper}>
            <b>SupplierName</b>
            <h2 className={styles.supplierName}> {props.name} TodoModa </h2>
            <div className={styles.supplierInfo}>
                <p>Contact:</p>
                <p> {props.contact}5562285611</p>
                <p></p>
            </div>

            <button className={styles.button}>Register Sale</button>
        </div>
    )
}
