import React, { useState } from "react";
import "../App.css";
import Logo from "../images/logo.svg";
import About from "../Components/About";
import ProjectsList from "../Components/ProjectsList";
import DB from '../data/db';


const HomePage = () => {
  const [data, setData] = useState(DB)


  return (
    <div className="content">
      <div className="logo">
        <img src={Logo} alt="Susan Logo" className="logo-img" />
      </div>

      <About />

      <div
        className="bg-projects"
        style={{ marginTop: '2em', marginRight: 'auto', marginLeft: 'auto', display: 'block' }}
      >
        <ProjectsList data={data.projects} />

      </div>
    </div >
  );
}

export default HomePage;
