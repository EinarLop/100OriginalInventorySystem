import React, { Component } from 'react';
import axios from 'axios';
import Product from './Components/Product'
import styles from './ShowProductsStyles.module.scss';

class ShowProducts extends Component {
constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
   
componentDidMount(){
axios.get("https://api100originalinventorysystem.herokuapp.com/product")
.then(response => { 
this.setState(
    {
        products: response.data
    })

})
    
};

    render() { 
        return (
            <div className={styles.Wrapper}>
            
            {this.state.products.map((product) => (
            <Product
                productCode={product.product_code}
                stock={product.stock}
                unitPrice={product.unit_price}
                id={product.id_product}
                url={product.img_url}
             />
            
            )   
           )};


          
            </div>
        
        
        );

    }
    

}
 
export default ShowProducts;