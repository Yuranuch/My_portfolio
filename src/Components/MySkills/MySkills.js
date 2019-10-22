import React from 'react';
import styles from './MySkills.module.css'
import SkillItem from "./SkillItem/SkillItem";
import Title from "../../reuseComponents/Title/Title";
import reactLogo from "./../../assets/images/react.png"
import jsLogo from "./../../assets/images/Js.png"
import htmlLogo from "./../../assets/images/HTML&CSS.png"
import Fade from "react-reveal/Fade"


function MySkills(props) {
    let reactKnowledge = <ul>
        <li>React library</li>
        <li>Redux state management</li>
        <li>Functional and class component</li>
        <li>Routing</li>
        <li>Redux-form</li>
        <li>React-Hooks</li>
        <li>Axios</li>
    </ul>
    let cssKnowledge = <ul>
        <li>CSS 3</li>
        <li>HTML 5</li>
        <li>Cross-browser valid code</li>
        <li>Flex</li>
        <li>Sass</li>
        <li>Design</li>
    </ul>
    let jsKnowledge =
        <span> Basic knowlege. Syntax, code structure, data types, conditional statements, arrow functions, array Methods, this, circuit, promises.
            Every day I try to learn something new and apply on my projects</span>
    return (
        <div className={styles.mySkills}>

                <div className={styles.container}>

                        <Title title="My Skills"/>

                    <Fade left>
                    <div className={styles.flexContainer}>
                        <SkillItem name={htmlLogo}
                                   title="HTML&CSS"
                                   info={cssKnowledge}/>
                        <SkillItem name={reactLogo}
                                   title="React&Redux"
                                   info={reactKnowledge}/>
                        <SkillItem name={jsLogo}
                                   title="Js"
                                   info={jsKnowledge}/>
                    </div>
                    </Fade>
                </div>

        </div>
    );
}

export default MySkills;
