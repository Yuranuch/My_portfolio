import React from 'react';
import styles from './MyWorks.module.css'
import MyWorkItem from "./MyWorkItem/MyWorkItem";
import Title from "../../reuseComponents/Title/Title";
import project_1 from "./../../assets/images/project_1.jpg"
import project_2 from "./../../assets/images/project_2.jpg"
import project_3 from "./../../assets/images/project_3.jpg"
import Fade from "react-reveal/Fade"


function MyWorks() {

    return (
        <div className={styles.myWorks}>
            <div className={styles.container}>
                <Title title="My Works"/>
            <Fade bottom>
                <div className={styles.flexContainer}>
                    <MyWorkItem
                        src={project_1}
                        title="kinopoisk"
                        info="During creation used technologies such as React, Redux, routing, react-redux, redux-forms. Used axios to get requests"
                        time="Creating a project took 3 days"
                    />
                    <MyWorkItem
                        src={project_2}
                        title="weather"
                        info="Used technologies such as React, Redux, functional components. Used axios to get requests"
                        time="Creating a project took 1 day"
                    />
                    <MyWorkItem
                        src={project_3}
                        title="Todo List"
                        info="This is my biggest project, I apply all my knowledge about React on it. During creation used technologies such as React, Redux, redux-thunk, redux forms. Used axios to get, post, put, delete requests"
                        time="The project is still in progress"
                    />
                    <MyWorkItem
                        src={project_1}
                        title="Social-Network"
                        info="This is my test project that I started in React courses. When I finish, it will be a simple social network to chat with my friends. During creation used technologies such as React, Redux, routing, react-redux, redux-forms. Used axios to get, post, put, delete requests"
                        time="The project is still in progress"
                    />

                </div>
            </Fade>
            </div>



        </div>
    );
}

export default MyWorks;
