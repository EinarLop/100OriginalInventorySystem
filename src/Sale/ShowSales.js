import React, { Component } from 'react';
import styles from './ShowSalesStyles.module.scss';

class ShowSales extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className={styles.Wrapper}>
                <div className={styles.Form}>
                    <h1> Show sales</h1>
                </div>
                <div className={styles.saleWrapper}>
                    <p className={styles.title}>Date</p>
                    <p className={styles.title}>Quantity</p>
                    <p className={styles.title}>Total</p>
                    <p className={styles.title}>ID platform</p>
                    <div>
                        <button className={styles.ButtonF}>More details</button>
                    </div>
                </div>
                <div className={styles.saleWrapper}>
                    
                    <p>22/11/2020</p>
                    <p>1000</p>
                    <p>10,000</p>
                    <p>P001</p>
                    <div>
                        <button className={styles.Button}>More details</button>
                    </div>
                </div>
                <div className={styles.saleWrapper}>
                    
                    <p>22/11/2020</p>
                    <p>1000</p>
                    <p>10,000</p>
                    <p>P001</p>
                    <div>
                        <button className={styles.Button}>More details</button>
                    </div>
                </div>
                <div className={styles.saleWrapper}>
                    
                    <p>22/11/2020</p>
                    <p>1000</p>
                    <p>10,000</p>
                    <p>P001</p>
                    <div>
                        <button className={styles.Button}>More details</button>
                    </div>
                </div>
                

            </div>
            );

    }
}

 
export default ShowSales;
