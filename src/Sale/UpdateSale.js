import React, { Component } from 'react';
import styles from './UpdateSaleStyles.module.scss';
import SalePreview from './Components/SalePreview'
import axios from 'axios';
import ProductSalePreview from './Components/ProductSalePreview';


class UpdateSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products_sale: [], 
            products:[],
            id_product: "", 
     
         }

    }


    componentDidMount(){
    axios.get("http://localhost:3010/productsale/" +  this.props.match.params.id)
    .then(response => {
        

        this.setState(
            {
                products_sale :response.data
            }) 
            console.log(response.data)
           this.getProducts();
    })

   
    }

    getProducts(){
        this.state.products_sale.forEach(product => {
            
 axios.get("http://localhost:3010/product/" + product.id_product)
    .then(response => {
        

        this.setState(
            {
               products: this.state.products.concat(response.data),
            })
           console.log(response.data)
    })


        });
    }

    render() { 
        return (
            <div className={styles.Wrapper}>
                <div className ={styles.Form}>
                    <h1>Delete sale</h1>
                    <input className={styles.Input} placeholder="Date"></input>
                    <input className={styles.Input} placeholder="Total"></input>
                    <input className={styles.Input} placeholder="ID Platform"></input>
                    
                    {this.state.products.map((product, counter) => (
                 
                        <ProductSalePreview
                            product_code={product.product_code}
                            unit_price={product.unit_price}
                        />
                    
                        
                    ))}


                     {this.state.products_sale.map((sale, counter) => (
                 
                      <p>{sale.quantity}</p>
                    
                        
                    ))}


                    <div className={styles.buttonWrapper}>
                        <button className={styles.Button}>Delete</button>
                    </div>

                    
                </div>

                





                     
       
  
    





            </div>
            );

    }
}

export default UpdateSale;


