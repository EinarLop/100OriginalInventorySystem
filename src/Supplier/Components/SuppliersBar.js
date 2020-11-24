import React from 'react'
import SearchBar from "../../GlobalComponents/SearchBar";
import { Link } from "react-router-dom";
import styles from '../SupplierStyles.module.scss';


function SuppliersBar() {
    return (
        <div className = {styles.bar}>
            <SearchBar/>
            <div className={styles.newSup}>
                <Link to="/createsupplier">Add Supplier</Link>
            </div>
        </div>
    )
}


export default SuppliersBar;
