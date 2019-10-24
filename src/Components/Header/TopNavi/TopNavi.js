import React from "react"
import NavItem from "./NavItem/NavItem"
import styles from './TopNavi.module.css'
import Fade from "react-reveal/Fade"


function TopNavi() {
    return (
        <Fade top>
            <div className={styles.headerNavi}>
                <NavItem section='#Main' name="Main"/>
                <NavItem section='#MySkills' name="My Skills"/>
                <NavItem section='#MyWorks' name="My Works"/>
                <NavItem section='#AboutMe' name="About Me"/>
                <NavItem section='#Contacts' name="Contacts"/>
            </div>
        </Fade>
    )
}

export default TopNavi
