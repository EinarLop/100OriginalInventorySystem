import React from 'react';
import styles from './SearchBarStyles.module.scss'

function SearchBar (props){
    return(
        <div className={styles.wrapper}> 
            
        <label htmlFor="search">Search</label>
        <input type="text" id="search"placeholder="AX2121"/>

        </div>
    );
}

export default SearchBar;
