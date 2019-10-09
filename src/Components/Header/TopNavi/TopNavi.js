import React from 'react';
import NavItem from "./NavItem/NavItem";
import styles from './TopNavi.module.css'

function TopNavi() {
    return (
        <div className={styles.headerNavi}>
            <NavItem name="Main"/>
            <NavItem name="My Skills"/>
            <NavItem name="My Works"/>
            <NavItem name="About Me"/>
            <NavItem name="Contacts"/>
        </div>
    );
}

export default TopNavi;
