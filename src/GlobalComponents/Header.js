import React from 'react'
import { FiWatch } from 'react-icons/fi';
import { Link } from "react-router-dom";


import styles from './HeaderStyles.module.scss';

function Header(props) {
    return (
        <nav >
            <ul className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <FiWatch  className={styles.logo}/>
                    <Link to="/" className={styles.Link}>100% Original</Link>
                </div>

                <div className={styles.links}>
                    <Link to="/showproducts"className={styles.Link} ><li>Inventory</li></Link>
                    <Link to="/showoperations" className={styles.Link}><li>Operations</li></Link>
                    <Link to="/showsales" className={styles.Link}><li>Sales</li></Link>
                    <Link to="/showsuppliers" className={styles.Link}><li>Suppliers</li></Link>
                   

                  
                </div>

            </ul>
        </nav >
    );

}

export default Header;
