import React from 'react';
import styles from './SkillItem.module.css'



function SkillItem(props) {
    return (
        <div className={styles.skillItem}>
            <div className={styles.imageBlock}>
                <img src={props.name} alt=''/>
            </div>
            <span className={styles.skillTitle}>{props.title}</span>
            <div className={styles.skillInfo}>
                <p>{props.info}</p>
            </div>

        </div>

    );
}

export default SkillItem;
