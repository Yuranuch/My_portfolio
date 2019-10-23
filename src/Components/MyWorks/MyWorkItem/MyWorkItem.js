import React from 'react';
import styles from './MyWorkItem.module.css'

function MyWorkItem(props) {
    return (
        <div className={styles.meWorkItemWrap} >
        <div className={styles.myWorkItem}>
            <div className={styles.example}>
            <a className={styles.examplePhoto} href={props.pathTo} >
                <span className={styles.viewButton}>view project</span>
                <img className={styles.exampleImg} src={props.src}/>
            </a>
            </div>

            <div className={styles.exampleInfo}>
                <div className={styles.title}>{props.title}</div>
                <span>{props.info}</span>
                <span>{props.time}</span>
            </div>
        </div>
        </div>
    );
}

export default MyWorkItem;
