import React, { Component } from 'react';
import styles from './CreateProductStyles.module.scss';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
class UpdateProduct extends Component {
       constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.fillValues= this.fillValues.bind(this)

        this.state = { 
            product:[],
            id_product:"1",
            productCode: "",
            unitPrice: "",
            unitCost:"",
            stock:"",
            url:"",
            supplier:"",
            message: "",
            redirect: false
         }
    }

    componentDidMount(){
    axios.get("http://localhost:3010/product/" +  this.props.match.params.id)
    .then(response => { 
    this.setState(
        {
           product :response.data
        })
        this.fillValues();
    })

   
    }

    fillValues(){
        this.setState({
            id_product: this.state.product[0].id_product,
            productCode: this.state.product[0].product_code,
            unitPrice: this.state.product[0].unit_price,
            unitCost:this.state.product[0].unit_cost,
            stock:this.state.product[0].stock,
            url:this.state.product[0].img_url,
            supplier:this.state.product[0].id_supplier
            
        })
    }

     onChange(e, val) {
        this.setState({
            [val]: e.target.value
        });

    }

      onSubmit(e) {
        e.preventDefault();

          const product = {
            id_product: this.state.product[0].id_product,
            product_code: this.state.productCode,
            unit_price: this.state.unitPrice,
            unit_cost: this.state.unitCost,
            stock: this.state.stock,
            img_url: this.state.url,
        }

           axios.put("http://localhost:3010/product/" +  this.props.match.params.id , product)
            .then(
                res => {console.log(res.data)
                let msg = <p style={{color: 'green'}}>Product updated succesfully!</p>; 
                this.setState({
                     message:msg
                     
                })
                setTimeout(() => this.setState({ redirect: true }), 2000);
            });
            
           
        }
       
       
  

      
  
    render() { 
        return (
            this.state.redirect ? <Redirect to="/showproducts"/> : 
            <div className={styles.Wrapper}>

                <p className={styles.Title}>Update product</p>
                
                <div className={styles.Form}>
                <input 
                    placeholder="Product Code" 
                    className={styles.Input} 
                    type="text"
                    value={this.state.productCode}
                    onChange={(e) => this.onChange(e, "productCode")}/>

                <input
                    placeholder="Unit Price"
                    className={styles.Input}
                    type="text"
                    value={this.state.unitPrice}
                    onChange={(e) => this.onChange(e, "unitPrice")}/>


                <input
                    placeholder="Unit Cost"
                    className={styles.Input}
                    type="text"
                    value={this.state.unitCost}
                    onChange={(e) => this.onChange(e, "unitCost")}/>

                
                <input 
                    placeholder="Stock"
                    className={styles.Input}
                    type="text"
                    value={this.state.stock}
                    onChange={(e) => this.onChange(e, "stock")}/>

                <input placeholder="Url"
                    className={styles.Input}
                    type="text"
                     value={this.state.url}
                    onChange={(e) => this.onChange(e, "url")}/>

                
                    {this.state.message}
                <button className={styles.Button}  onClick={this.onSubmit} >Update product</button>
                </div>
           
           
            </div>
            );

    }
}
 
export default UpdateProduct;
/*
<input 
                    placeholder="Supplier" 
                    className={styles.Input} 
                    type="text"
                     value={this.state.supplier}
                    onChange={(e) => this.onChange(e, "supplier")}/>
*/