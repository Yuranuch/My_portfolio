import React from "react"
import styles from "./MainContainer.module.css"
import photo from "./../../assets/images/014.jpg"
import Fade from "react-reveal/Fade"

function MainContainer() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Fade left>
                    <div className={styles.greeting}>
                        <div className={styles.greetHi}>Hello</div>
                        <div className={styles.fullName}>My name is <span>Tsikhanovich Yury</span></div>
                        <div className={styles.prof}>I'm FrontEnd Developer</div>
                    </div>
                </Fade>
                <Fade right>
                    <div className={styles.photo}>
                        <img src={photo} alt=""/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default MainContainer
