import React, { Component } from 'react';
import styles from '../ShowSalesStyles.module.scss';
function SalePreview(props){
        return (
            <div className={styles.saleWrapper}>

                    <p>{props.date.slice(0,10)}</p>
                    <p>{props.total}</p>
                    <p>{props.id_platform}</p>
                    <div>
                        <button className={styles.Button}>More details</button>
                    </div>
            </div>
        );
}

export default SalePreview;