import React, { Component } from 'react';
import styles from './SalePreviewStyles.module.scss';
import {Link} from 'react-router-dom';
function SalePreview(props){
        return (
          <div className={styles.Wrapper}>
            <div className={styles.Container}>{props.date.slice(0, 10)}</div>
            <div className={styles.Container}>{props.total}</div>
            <div className={styles.Container}>{props.id_platform}</div>
            <div className={styles.Container}>
              <Link className={styles.Link} to={"/updatesale/" + props.id}>
                Details
              </Link>
            </div>
          </div>
        );
}

export default SalePreview;