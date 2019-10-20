import React from 'react';
import styles from './MainContainer.module.css'
import photo from "./../../assets/images/014.jpg"

function MainContainer() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <div>Hello</div>
                    <div className={styles.fullName}>My name is Tsikhanovich Yury</div>
                    <div>I'm FrontEnd Developer</div>
                </div>
                <div className={styles.photo}>
                    <img src={photo} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;
