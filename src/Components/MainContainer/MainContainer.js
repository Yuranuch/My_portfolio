import React from 'react';
import styles from './MainContainer.module.css'

function MainContainer() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <div>Hello</div>
                    <div>My name is Tsikhanovich Yury</div>
                    <div>I'm FrontEnd Developer</div>
                </div>
                <div className={styles.photo}>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}

export default MainContainer;
