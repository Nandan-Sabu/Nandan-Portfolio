import { useState } from "react";
import ProjectModal from "../components/ProjectModal";

import project1_1 from "../project_pics/animal_re_id_img.png";
import project1_2 from "../project_pics/animal_re_id_img5.png";
import project1_3 from "../project_pics/animal_re_id_img2.png";
import project1_4 from "../project_pics/animal_re_id_img3.png";
import project1_5 from "../project_pics/animal_re_id_img4.png";


import project2_1 from "../project_pics/platformer_game_img.png";
import project2_2 from "../project_pics/platformer_game_img2.png";
import project2_3 from "../project_pics/platformer_game_img3.png";
import project2_4 from "../project_pics/platformer_game_img4.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Animal Re-identification Desktop Application",
      description: `
        Desktop application that implements AI to 
      `,
      images: [
        project1_1,
        project1_2,
        project1_3,
        project1_4,
        project1_5
      ],
    },
    {
      title: "Multi-Level Platformer Game",
      description: `
        A cross-platform desktop application developed using Electron.
        The project involved designing the UI, implementing core logic,
        and integrating local data storage.
      `,
      images: [
        project2_1,
        project2_2,
        project2_3,
        project2_4,
      ],
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-top-text">
        <h1>My Projects</h1>
        <p>Here you can see some of the projects I’ve worked on during my degree and in my free time.</p>
      </div>
      

      {projects.map((project, index) => (
        <div className="project-row" key={index}>
          {/* LEFT: TEXT */}
          <div className="project-text">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>

          {/* RIGHT: IMAGE */}
          <div
            className="project-image-card"
            onClick={() => setActiveProject(project)}
          >
            <img src={project.images[0]} alt={project.title} />
            <div className="image-shade"></div>
          </div>
        </div>
      ))}

      {/* MODAL */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;