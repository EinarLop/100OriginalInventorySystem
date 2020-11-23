import React, { Component } from 'react';
import axios from 'axios';
import styles from './SupplierStyles.module.scss';
import Supplier from "./Components/Supplier";
import SuppliersBar from './Components/SuppliersBar';

class ShowSupplier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suppliers: []
        }
    }
    /*
    componentDidMount(){
        axios.get("https://api100originalinventorysystem.herokuapp.com/supplier")
            .then(response => { 
                this.setState(
                    {
                        suppliers: response.data
                    }
                    )});
    };*/

    render() {
        return (
            <div>
                <SuppliersBar/>
                <div className={styles.suppliersWrapper}>
                    <Supplier/>
                    <Supplier/>
                    <Supplier/>
                </div>
            </div>
        )
    }
}


export default ShowSupplier;