import React from 'react';
import styles from './MySkills.module.css'
import SkillItem from "./SkillItem/SkillItem";

function MySkills(props) {
    return (
        <div className={styles.mySkills}>

            <div className={styles.container}>
                <div className={styles.title}>MySkills</div>
                <div className={styles.flexContainer}>
                    <SkillItem title="HTML&CSS" info="Lorem oiiwvowi lsdlkvds skmre psdkvsv pdspvrei psivdmv pmvpmfv"/>
                    <SkillItem title="Js" info="Lorem oiiwvowi lsdlpsivdmv pmvpmfv"/>
                    <SkillItem title="React" info="Lorem sdlkvds skmre psdkvsv pdspvrei psivdmv pmvpmfv"/>
                </div>
            </div>
        </div>
    );
}

export default MySkills;
