import React, { Component } from 'react';
import styles from './Components/OperationPreviewStyles.module.scss';
import OperationPreview from "./Components/OperationPreview"

class ShowOperations extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <div className={styles.Wrapper}>
                <div className={styles.Form}>
                    <h1> Show operations</h1>
                </div>
                <div className={styles.operationWrapper}>
                    <p className={styles.Reason}> Client Devolution</p>
                    <p className={styles.Type}>Type: In</p>
                    <p className={styles.Date}>12/20/1010</p>
                </div>
                 <div className={styles.operationWrapper}>
                    <p className={styles.title}>Image</p>
                    <p className={styles.title}>Product code</p>
                    <p className={styles.title}>Quantity</p>
                    <p className={styles.title}>Unit price</p>
                </div>
                 
                 <OperationPreview/>
            </div>
            
        </div> );
    }
}
 
export default ShowOperations;