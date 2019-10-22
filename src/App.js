import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainContainer from "./Components/MainContainer/MainContainer";
import MySkills from "./Components/MySkills/MySkills";
import MyWorks from "./Components/MyWorks/MyWorks";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Components/Contacts/Contacts";
import Particles from "react-particles-js";

const particlesOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }

    }
}

function App() {

    return (
        <div className="App">
                {/*<Particles className="particles" params={particlesOpt}/>*/}
                <Header/>
                <MainContainer/>
                <MySkills/>
                <MyWorks/>
                <AboutMe/>
                <Contacts/>
                <Footer/>
        </div>
    );
}

export default App;
