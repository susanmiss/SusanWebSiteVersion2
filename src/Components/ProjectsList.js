import React, { useState } from "react";
import "../style/Projects.css";




const Projects = ({ data }) => {


  return (
    <div className="projects">

      {data.map((project, key) => (
        <div className="row" key={project.id}>



          { project.id % 2 === 0 ?
            <>
              <div className="cf">
                <img className="bottom" id="bdb" src={project.imageBottom} alt={project.title} />
                <img className="top" id="bdt" src={project.imageTop} alt="project" />
              </div>

              <div className="project-content column">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>Technologies Used:</p>
                <ul>
                  {project.technologiesUsed.map((technology) => (
                    <li>{technology}</li>
                  ))}
                </ul>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-github">Access on Github</button>
                </a>
              </div>
            </>
            :
            <>
              <div className="project-content column">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>Technologies Used:</p>
                <ul>
                  {project.technologiesUsed.map((technology) => (
                    <li>{technology}</li>
                  ))}
                </ul>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-github">Access on Github</button>
                </a>
              </div>

              <div className="cf">
                <img className="bottom" id="bdb" src={project.imageBottom} alt={project.title} />
                <img className="top" id="bdt" src={project.imageTop} alt="project" />
              </div>
            </>

          }
        </div>
      ))
      }

    </div >

  );

}

export default Projects;
