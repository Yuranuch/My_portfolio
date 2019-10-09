import React from 'react';
import styles from './NavItem.module.css'

function NavItem(props) {
  return (
    <div className={styles.navItem}>
        <a href="#">{props.name}</a>
    </div>
  );
}

export default NavItem;
