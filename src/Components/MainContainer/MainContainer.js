import React from 'react';
import styles from './MainContainer.module.css'

function MainContainer() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hello</span>
                    <span>My name is Tsikhanovich Yury</span>
                    <span>I'm FrontEnd Developer</span>
                </div>
                <div className={styles.photo}>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}

export default MainContainer;
