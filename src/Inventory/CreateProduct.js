import React, { Component } from 'react';
import styles from './CreateProductStyles.module.scss';
import axios from 'axios'

class CreateProduct extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
            product: {},
            productCode: "",
            unitPrice: "",
            unitCost:"",
            stock:"",
            url:"",
            supplier:""


         }
    }

    

     onChange(e, val) {
        this.setState({
            [val]: e.target.value
        });

    }

      onSubmit(e) {
        e.preventDefault();

        const product = {
            id_product: null,
            product_code: this.state.productCode,
            unit_price: this.state.unitPrice,
            unit_cost: this.state.unitCost,
            stock: this.state.stock,
            img_url: this.state.url,
            id_supplier: this.state.supplier
        }
          axios.post('https://api100originalinventorysystem.herokuapp.com/product', product)
            .then(res => console.log(res.data));
        }
       
        //  axios.post('http://localhost:3010/product', product)
        //     .then(res => console.log(res.data));
        // }

      
  
    render() { 
        return (
            <div className={styles.Wrapper}>

                <p className={styles.Title}>Create product</p>
                
                <div className={styles.Form}>
                <input 
                    placeholder="Product Code" 
                    className={styles.Input} 
                    type="text" 
                    onChange={(e) => this.onChange(e, "productCode")}/>

                <input
                    placeholder="Unit Price"
                    className={styles.Input}
                    type="text"
                    onChange={(e) => this.onChange(e, "unitPrice")}/>


                <input
                    placeholder="Unit Cost"
                    className={styles.Input}
                    type="text"
                    onChange={(e) => this.onChange(e, "unitCost")}/>

                
                <input 
                    placeholder="Stock"
                    className={styles.Input}
                    type="text"
                    onChange={(e) => this.onChange(e, "stock")}/>

                <input placeholder="Url"
                    className={styles.Input}
                    type="text"
                    onChange={(e) => this.onChange(e, "url")}/>

                <input 
                    placeholder="Supplier" 
                    className={styles.Input} 
                    type="text"
                    onChange={(e) => this.onChange(e, "supplier")}/>

                <button className={styles.Button}  onClick={this.onSubmit} >Create product</button>
                </div>
           
           
            </div>
            );

    }
}
 
export default CreateProduct;