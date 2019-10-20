import React from 'react';
import styles from './MainContainer.module.css'
import photo from "./../../assets/images/014.jpg"

function MainContainer() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <div className={styles.greetHi}>Hello</div>
                    <div className={styles.fullName}>My name is <span>Tsikhanovich Yury</span></div>
                    <div className={styles.prof}>I'm FrontEnd Developer</div>
                </div>
                <div className={styles.photo}>
                    <img src={photo} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;
