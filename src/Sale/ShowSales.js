import React, { Component } from 'react';
import styles from './ShowSalesStyles.module.scss';
import axios from 'axios';
import SalePreview from "./Components/SalePreview";
import {Link} from 'react-router-dom';

class ShowSales extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sales: []
        }
    }

    componentDidMount(){
      let cookieValue = this.readCookie('100Orig-Id');
      axios.get("https://api100originalinventorysystem.herokuapp.com/sale/" +  "?admin=" + cookieValue)
      .then(response => { 
      if (response.data === "No results"){
          console.log("No sales in Database")
      }else {
          this.setState(
              {
                  sales: response.data
              })
      }
      console.log(response.data)
      }).catch(error => {
          console.log(error.response.status);
            if (error.response.status === 401) {
                window.location = "/";
            }
      })
    };

    render() { 
        return (
          <div>
            <div className={styles.divF}>
                      <div className={styles.fakeButton}>
                              <Link to='/createsale' className={styles.LinkCreate}>Register Sale</Link>
                      </div>
                  </div>
            <div className={styles.Wrapper}>
              <div className={styles.Form}>
                <h1> Show sales</h1>
              </div>
          

              <div className={styles.Menu}>
                <div className={styles.Container}>Date</div>
                <div className={styles.Container}>Total</div>
                <div className={styles.Container}>Platform</div>
                <div className={styles.Container}></div>
              </div>
              {
              this.state.sales.length ? (this.state.sales.map((sale, counter) => (
                  <div key={counter}>
                    <SalePreview
                      date={sale.date}
                      quantity={sale.quantity}
                      total={sale.total}
                      id_platform={sale.id_platform}
                      id={sale.id_sale}
                    />
                  </div>
                ))) : <div>No sales</div>
      }
              
            </div>
          </div>
        );

    }

    readCookie = (cookieName) => {
      let len = cookieName.length
      let cookies = document.cookie.split(';');
      let value = null
      for (let i = 0; i < cookies.length; i++) {
          const c = cookies[i];
          if (c.substring(0,len) === cookieName)
              value = c.substring(len+1)
              console.log(value)
      }
      return value;
  }
}

 
export default ShowSales;
