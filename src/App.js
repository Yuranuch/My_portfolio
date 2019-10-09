import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainContainer from "./Components/MainContainer/MainContainer";
import MySkills from "./Components/MySkills/MySkills";
import MyWorks from "./Components/MyWorks/MyWorks";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainContainer/>
        <MySkills/>
        <MyWorks/>
        <AboutMe />
        <Footer/>
    </div>
  );
}

export default App;
