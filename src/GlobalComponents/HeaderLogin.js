import React from 'react'
import { FiWatch } from 'react-icons/fi';
import { Link } from "react-router-dom";


import styles from './HeaderStyles.module.scss';

function HeaderLogin(props) {
    return (
        <nav >
            <ul className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <FiWatch  className={styles.logo}/>
                    <Link to="/" className={styles.Link}>100% Original</Link>
                </div>


            </ul>
        </nav >
    );

}

export default HeaderLogin;
