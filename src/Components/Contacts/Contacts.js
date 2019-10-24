import React from "react"
import styles from "./Contacts.module.css"
import Title from "../../reuseComponents/Title/Title"
import Fade from "react-reveal/Fade"

function Contacts() {

    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <Title title="Contacts"/>
                <Fade clear>
                    <div className={styles.contactsInfo}>
                        <div className={styles.infoItem}><span>Skype: </span>yura477573</div>
                        <div className={styles.infoItem}><span>Telephone: </span>+37529 8228833</div>
                        <div className={styles.infoItem}><span>Mail: </span>yura477573@mail.ru</div>
                        <div className={styles.infoItem}><span>Telegram: </span>Yura Tsikhanovich</div>
                        <div className={styles.infoItem}><span>GitHub: </span>
                            <a href="https://github.com/Yuranuch">https://github.com/Yuranuch</a>
                        </div>
                        <div className={styles.infoItem}><span>Free-lancer: </span>
                            <a href="https://www.fl.ru/users/yuranuch/">www.free-lance.ru/users/Yuranuch</a>
                        </div>
                        <div className={styles.infoItem}><span>Location: </span>Belarus, Minsk</div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts
