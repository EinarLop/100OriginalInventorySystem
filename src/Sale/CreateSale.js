import React, { Component } from 'react';
import styles from './CreateSaleStyles.module.scss';
import axios from 'axios'


class CreateSale extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.searchProduct= this.searchProduct.bind(this)

        this.state = { 
            products: [],
            input_code: "",
            input_quantity: "",
         }
    }

    onChange(e, val){
        this.setState({
            [val]: e.target.value 
        })
    }

    onSubmit(e){
        e.preventDefault();

        const product ={
            product_code: this.state.product_code,
            quantity: this.state.quantity,
        }

      
    }

    searchProduct(e){
         e.preventDefault();

           axios.get("http://localhost:3010/product/code/" + this.state.input_code).then(response => {
            this.setState({
                product: response.data
            })
               console.log(response.data)
        })

     
    }

    render() { 
        return (
            <div className={styles.Wrapper}>
                <div className ={styles.Form}>
                    <h1>Create sale</h1>
                    <div className={styles.FormCS}>
                        <input className={styles.Input} placeholder="Date of sale"></input>
                        <select className={styles.List}>
                            <option>Amazon</option>
                            <option>Mercado libre</option>
                            <option>La welmar</option>
                        </select>
                    </div>
                    <div className={styles.productWrapper}>
                        <input 
                        className={styles.InputCS} 
                        placeholder="Product"  
                        onChange={(e) => this.onChange(e, "input_code")}></input>
                        <input 
                        className={styles.InputCS} 
                        placeholder="Quantity"
                        onChange={(e) => this.onChange(e, "input_quantity")}
                        ></input>
                        <button className={styles.Button} onClick={this.searchProduct}>Add product</button>
                    </div>
                    <div className={styles.saleWrapper}>
                        <p>CAS2020</p>
                        <p>1000</p>
                        <p>10,000</p>
                        <div>
                           
                            <button className={styles.Button}>Delete</button>
                        </div>
                    </div>
                        
                    
                    <button className={styles.Button}>Create sale</button>
                </div>
            </div>
            );

    }
}

export default CreateSale;