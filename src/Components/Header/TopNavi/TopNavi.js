import React from 'react';
import NavItem from "./NavItem/NavItem";
import styles from './TopNavi.module.css'
import Fade from "react-reveal/Fade"

function TopNavi() {
    return (
        <Fade top>
        <div className={styles.headerNavi}>
            <NavItem name="Main"/>
            <NavItem name="My Skills"/>
            <NavItem name="My Works"/>
            <NavItem name="About Me"/>
            <NavItem name="Contacts"/>
        </div>
        </Fade>
    );
}

export default TopNavi;
