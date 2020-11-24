import React, { Component } from 'react';
import styles from '../ShowSalesStyles.module.scss';
import {Link} from 'react-router-dom';
function SalePreview(props){
        return (
            <div className={styles.saleWrapper}>

                    <p>{props.date.slice(0,10)}</p>
                    <p>{props.total}</p>
                    <p>{props.id_platform}</p>
                    <div>
                        <Link className={styles.Link} to={"/updatesale/" + props.id }>Details</Link>
                    </div>
            </div>
        );
}

export default SalePreview;