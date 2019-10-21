import React from 'react';
import styles from './MyWorkItem.module.css'

function MyWorkItem(props) {
    return (
        <div className={styles.myWorkItem}>
            <div className={styles.example}>
                <a href="https://yuranuch.github.io/Kinopoisk/#/" className={styles.viewButton}>View</a>
                <img className={styles.exampleImg} src={props.src}/>
            </div>

            <div className={styles.exampleInfo}>
                <div className={styles.title}>{props.title}</div>
                <span>{props.info}</span>
                <span>{props.time}</span>
            </div>

        </div>
    );
}

export default MyWorkItem;
