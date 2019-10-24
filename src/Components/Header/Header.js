import React from "react"
import styles from "./Header.module.css"
import TopNavi from "./TopNavi/TopNavi"

function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <TopNavi/>
            </div>
        </div>
    )
}

export default Header
