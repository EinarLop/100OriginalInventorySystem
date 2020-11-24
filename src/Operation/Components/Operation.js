import React, { Component } from 'react';
import styles from './OperationStyles.module.scss'


class Operation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className={styles.Wrapper}>
                 <div className={styles.ReasonDateWrapper}>
                     <p className={styles.Reason}> Client Devolution</p>
                     <p className={styles.Type}>Type: In</p>
                     <p className={styles.Date}>12/20/1010</p>
                 </div>

                 <div className={styles.ProductsWrapper}>
                     <p className={styles.NumProducts}>10</p>
                     <p className={styles.Total}>100</p>
                     
                 </div>

                 
            </div>

);
    }
}

 
export default Operation;