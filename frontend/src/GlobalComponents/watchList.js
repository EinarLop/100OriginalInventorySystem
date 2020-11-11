import axios from 'axios';
import React, { Component } from 'react';
import Product from '../Inventory/product';

class WatchList extends Component {
    constructor(props) {
        super(props);
        this.state = {watches: [ ]}
    }
    componentDidMount() {
        axios.get('http://localhost:3010/product')
            .then(response => {
                this.setState({watches: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() { 
    return (<div>{this.state.watches.map(watch=><Product productCode={watch.product_name}/>)}</div>);


    }
}
 
export default WatchList;