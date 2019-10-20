import React from 'react';
import styles from './MySkills.module.css'
import SkillItem from "./SkillItem/SkillItem";
import Title from "../../reuseComponents/Title/Title";

function MySkills(props) {
    return (
        <div className={styles.mySkills}>

            <div className={styles.container}>
                <Title title="My Skills"/>
                <div className={styles.flexContainer}>
                    <SkillItem title="HTML&CSS" info="Lorem oiiwvowi Lorem sdlkvds skmre psdkvs lsdlkvds skmre Lorem sdlkvds skmre psdkvs psdkvsv Lorem sdlkvds skmre psdkvs pdspvrei psivdmv pmvpmfv"/>
                    <SkillItem title="Js" info="Lorem oiiwvowi lsdlpsivdmv pmvpmfv Lorem Lorem sdlkvds skmre psdkvs sdlkvds skmre psdkvs"/>
                    <SkillItem title="React" info="Lorem sdlkvds skmre psdkvsv Lorem Lorem sdlkvds skmre psdkvs sdlkvds skmre psdkvs pdspvrei psivdmv pmvpmfv"/>
                </div>
            </div>
        </div>
    );
}

export default MySkills;
