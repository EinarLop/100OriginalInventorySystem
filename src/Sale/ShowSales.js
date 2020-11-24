import React, { Component } from 'react';
import styles from './ShowSalesStyles.module.scss';
import axios from 'axios';
import SalePreview from "./Components/SalePreview";

class ShowSales extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sales: []
         }
    }

    componentDidMount(){
    axios.get("http://localhost:3010/sale")
    .then(response => { 
    this.setState(
        {
            sales: response.data
        })
        console.log(response.data)
    })
        
    };

    render() { 
        return (
            <div className={styles.Wrapper}>
                <div className={styles.Form}>
                    <h1> Show sales</h1>
                </div>
                <div className={styles.saleWrapper}>
                    <p className={styles.title}>Date</p>
                    <p className={styles.title}>Total</p>
                    <p className={styles.title}>Platform</p>
                    <div>
                        <button className={styles.ButtonF}>More details</button>
                    </div>
                </div>

             {this.state.sales.map((sale, counter) => (
                 
            <div key={counter}>
              <SalePreview
                date={sale.date}
                quantity={sale.quantity}
                total={sale.total}
                id_platform = {sale.id_platform}
              />
            </div>
          ))}        
            </div>
        );

    }
}

 
export default ShowSales;
