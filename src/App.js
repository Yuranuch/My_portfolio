import React, {Component} from "react"
import "./App.css"
import Header from "./Components/Header/Header"
import MainContainer from "./Components/MainContainer/MainContainer"
import MySkills from "./Components/MySkills/MySkills"
import MyWorks from "./Components/MyWorks/MyWorks"
import AboutMe from "./Components/AboutMe/AboutMe"
import Footer from "./Components/Footer/Footer"
import Contacts from "./Components/Contacts/Contacts"

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <section id='Main'>
                    <MainContainer/>
                </section>
                <section id='MySkills'>
                    <MySkills/>
                </section>
                <section id='MyWorks'>
                    <MyWorks/>
                </section>
                <section id='AboutMe'>
                    <AboutMe/>
                </section>
                <section id='Contacts'>
                    <Contacts/>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default App
