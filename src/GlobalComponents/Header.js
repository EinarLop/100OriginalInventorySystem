import React from 'react'
import { FiWatch } from 'react-icons/fi';


import styles from './HeaderStyles.module.scss';

function Header(props) {
    return (
        <nav >
            <ul className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <FiWatch  className={styles.logo}/>
                    <li>100% Original</li>
                </div>

                <div className={styles.links}>
                    <li>Inventory</li>
                    <li>Sales</li>
                    <li>Reports</li>
                    <li>Providers</li>

                </div>

            </ul>
        </nav >
    );

}

export default Header;
