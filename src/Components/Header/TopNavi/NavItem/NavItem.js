import React from "react"
import styles from "./NavItem.module.css"
import AnchorLink from "react-anchor-link-smooth-scroll"

function NavItem(props) {
    return (
        <div className={styles.navItem}>
            <AnchorLink href={props.section}>{props.name}</AnchorLink>
        </div>
    )
}

export default NavItem
