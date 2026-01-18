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

import project3_1 from "../project_pics/machine_language_img.png";
import project3_2 from "../project_pics/machine_language_img2.png";

import project4_1 from "../project_pics/bouncing_shape_img.png";
import project4_2 from "../project_pics/bouncing_shape_img2.png";
import project4_3 from "../project_pics/bouncing_shape_img3.png";
import project4_4 from "../project_pics/bouncing_shape_img4.png";
import project4_5 from "../project_pics/bouncing_shape_img5.png";
import project4_6 from "../project_pics/bouncing_shape_img6.png";
import project4_7 from "../project_pics/bouncing_shape_img7.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Animal Re-identification Desktop Application",
      description: `
        Developed a cross-platform desktop application that uses artificial intelligence to identify 
        and re-identify animals from images captured by trap cameras. The system assigns each detected 
        animal their own digital identity, enabling the tracking of population counts and migration 
        patterns across specific locations. The application is designed to support pest management 
        efforts in New Zealand, particularly for monitoring species such as stoats.

        The frontend was built using React and deployed as a desktop application via Electron. A 
        Node.js and Express.js backend handles application logic and data flow, while an AI inference 
        server built with Anaconda and PyTorch performs animal detection and re-identification.
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
        Developed a multi-level 2D platformer game using Python, applying object-oriented 
        programming principles to structure core gameplay systems. The game features multiple 
        interconnected levels designed with Tiled, incorporating player movement, collision
         handling, enemies, and interactive environments. Gameplay mechanics include collectible
          items, moving platforms, portals, hazards, and level transitions, supported by animations 
          and audio to enhance the player experience.
      `,
      images: [
        project2_1,
        project2_2,
        project2_3,
        project2_4,
      ],
    },

    {
      title: "Machine Learning Model for Predictive Analytics",
      description: `
        Developed a machine learning model using Python and Jupyter. This model uses training data
        to develop a decision tree which is be calculating the entropy and information gain 
        to find the best split. this tree can then be used on testing data, which is a new set of data, and 
        predict outcomes based on patterns learned from the training data. The data that is given will
        be for different features and the model will predict the target variable based on these 
        given features. For example, if you wanted to know if a person earns more or less than 50k annually, 
        marital_status being "Married-civ-spouse" would be the best split to determine this outcome and 
        each test instance is evaluated by traversing the tree according to its feature values until a leaf 
        node is reached
        .

      `,
      images: [
        project3_1,
        project3_2,
      ],
    },

    {
      title: "Bouncing shapes Application",
      description: `
        Developed a Java-based desktop application with a graphical user interface using object-oriented 
        programming principles. The application allows users to dynamically create and manage shapes, 
        such as squares and rectangles, which are added to a hierarchical (nested) node structure. Each 
        shape is animated to bounce within the application window, and users can further insert nested 
        shapes inside existing shapes, demonstrating recursive composition and inheritance. The project 
        was implemented using Java in Notepad++, emphasizing core OOP concepts including encapsulation, 
        polymorphism, and class hierarchies, as well as event handling and graphical rendering.
      `,
      images: [
        project4_1,
        project4_2,
        project4_3,
        project4_4,
        project4_5,
        project4_6,
        project4_7,
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