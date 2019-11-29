import React from "react"
import styles from "./MyWorks.module.css"
import MyWorkItem from "./MyWorkItem/MyWorkItem"
import Title from "../../reuseComponents/Title/Title"
import project_1 from "./../../assets/images/project_1.jpg"
import project_2 from "./../../assets/images/project_2.jpg"
import project_3 from "./../../assets/images/project_3.jpg"
import project_4 from "./../../assets/images/project_4.jpg"
import project_5 from "./../../assets/images/project_5.jpg"
import project_6 from "./../../assets/images/project_6.jpg"
import project_7 from "./../../assets/images/project_7.jpg"
import project_8 from "./../../assets/images/project_8.jpg"
import project_9 from "./../../assets/images/project_9.jpg"
import project_10 from "./../../assets/images/project_10.jpg"
import project_11 from "./../../assets/images/project_11.jpg"
import Fade from "react-reveal/Fade"


function MyWorks() {
    return (
        <div className={styles.myWorks}>
            <div className={styles.container}>
                <Title title="My Works"/>
                {/*<Fade bottom>*/}
                    <div className={styles.flexContainer}>
                        <MyWorkItem
                            src={project_1}
                            title="kinopoisk (+mobile)"
                            info="During creation used technologies such as React, Redux, routing, react-redux, redux-thunk, redux-forms. Used axios to get requests"
                            time="Creating a project took 3 days"
                            pathTo="https://yuranuch.github.io/Kinopoisk/#/"
                        />
                        <MyWorkItem
                            src={project_11}
                            title="adv (+mobile)"
                            info="During creation used technologies such as SASS, Grid, Flex, BEM, Jquery, Js, Figma"
                            time="Creating a project took 2 days"
                            pathTo="https://github.com/Yuranuch/adv"
                        />
                        <MyWorkItem
                            src={project_9}
                            title="payment_form (+mobile)"
                            info="During creation used technologies such as React, Formik(for validation and submit), SASS"
                            time="Creating a project took 3 days"
                            pathTo="https://github.com/Yuranuch/payment_form"
                        />
                        <MyWorkItem
                            src={project_10}
                            title="events (+mobile)"
                            info="During creation used technologies such as CSS, HTML, BEM, Jquery."
                            time="Creating a project took 3 days"
                            pathTo="https://github.com/Yuranuch/Events"
                        />
                        <MyWorkItem
                            src={project_3}
                            title="todo List"
                            info="This is my biggest project, I apply all my knowledge about React on it. During creation used technologies such as React, Redux, redux-thunk, redux forms. Used axios to get, post, put, delete requests"
                            time="The project is still in progress"
                            pathTo="https://github.com/Yuranuch/TodoList-AJAX"
                        />
                        <MyWorkItem
                            src={project_2}
                            title="weather"
                            info="Used technologies such as React, Redux, functional components. Used axios to get requests"
                            time="Creating a project took 1 day"
                            pathTo="https://github.com/Yuranuch/Weather"
                        />
                        <MyWorkItem
                            src={project_4}
                            title="social-network"
                            info="This is my test project that I started in React courses. When I finish, it will be a simple social network to chat with my friends. During creation used technologies such as React, Redux, routing, react-redux, redux-thunk, redux-forms. Used axios to get, post, put, delete requests"
                            time="The project is still in progress"
                            pathTo="https://github.com/Yuranuch/Social-Network"
                        />
                        <MyWorkItem
                            src={project_5}
                            title="counter"
                            info="this is one of my first projects, so do not judge strictly). During creation used technologies such as React, local state, class components"
                            time="Creating a project took 2 days"
                            pathTo="https://github.com/Yuranuch/Counter"
                        />
                        <MyWorkItem
                            src={project_6}
                            title="simple game 'dog-huner'"
                            info="this is one of my first test. During creation used technologies such as React, Redux"
                            time="Creating a project took 4 hours"
                            pathTo="https://github.com/Yuranuch/game-dog"
                        />
                        <MyWorkItem
                            src={project_7}
                            title="news"
                            info="Fake authorization on the News site. During creation used technologies such as React, Redux, routing."
                            time="Creating a project took 1 day"
                            pathTo="https://github.com/Yuranuch/News_page"
                        />
                        <MyWorkItem
                            src={project_8}
                            title="user reviews and articles"
                            info="Requests a server to receive articles. During creation used technologies such as React, Redux, routing, react-redux. Used axios to get requests"
                            time="Creating a project took 1 day"
                            pathTo="https://github.com/Yuranuch/react_gallery"
                        />
                    </div>
                {/*</Fade>*/}
            </div>
            
        </div>
    )
}

export default MyWorks
