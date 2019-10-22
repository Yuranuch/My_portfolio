import React from 'react';
import styles from "./Title.module.css";
import Fade from "react-reveal/Fade";

function Title(props) {
    return (
        <Fade top>
            <div className={styles.title}>{props.title}</div>
        </Fade>
    );
}

export default Title;