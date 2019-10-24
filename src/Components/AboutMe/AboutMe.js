import React from "react"
import styles from "./AboutMe.module.css"
import Title from "../../reuseComponents/Title/Title"
import Fade from "react-reveal/Fade"

function AboutMe() {
    return (
        <div className={styles.aboutMe}>
            <div className={styles.container}>
                <Title title="About me"/>
                <Fade clear>
                    <p>Hi, my name is Yura. I will not tell you my age, because I do not remember). Joke, I'm 34.</p>
                    <p>In 2008 I graduated from the Brest Polytechnic University with a degree in Economics and
                        Enterprise Management.</p>
                    <p>For almost 12 years I have worked in the food trade. I was a sales agent, then I was the manager
                        of the branch, then I became the head of the sales department.
                        And now I realized that I did not like this work). I want to change my direction of activity and
                        become a professional web developer.</p>
                    <p>From 2013-2016, I worked part-time on freelance, as a site layout specialist.
                        Almost 8 months ago, I began to study the react and its libraries, I really liked it, reviewed
                        many videos and read the documentation.
                        I also completed a 5-month react study course.I know English well.</p>
                    <p>And now I think I will be useful to you)</p>
                    <p>I plan to develop myself and become the best web developer.</p>
                    <p>Thank you for your attention, good bye</p>
                </Fade>
            </div>
        </div>
    )
}

export default AboutMe
