import React from 'react';
import styles from './MyWorkItem.module.css'

function MyWorkItem(props) {
    return (
        <div className={styles.myWorkItem}>
            <div className={styles.example}>
                <a href="#" className={styles.viewButton}>Смотреть</a>
                <img src={props.src}/>
            </div>
            <div className={styles.exampleInfo}>
                <span>{props.info}</span>
            </div>

        </div>
    );
}

export default MyWorkItem;