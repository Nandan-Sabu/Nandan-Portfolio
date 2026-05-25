import { useState } from "react";
import ProjectModal from "../components/ProjectModal";

import project1_1 from "../project_pics/animal_re_id_img.png";
import project1_2 from "../project_pics/animal_re_id_img5.png";
import project1_3 from "../project_pics/animal_re_id_img2.png";
import project1_4 from "../project_pics/animal_re_id_img3.png";
import project1_5 from "../project_pics/animal_re_id_img4.png";

import project5_1 from "../project_pics/ninjagame_img.png";
import project5_2 from "../project_pics/ninjagame_img2.png";
import project5_3 from "../project_pics/ninjagame_img3.png";
import project5_4 from "../project_pics/ninjagame_img4.png";
import project5_5 from "../project_pics/ninjagame_img5.png";
import project5_6 from "../project_pics/ninjagame_img6.png";
import project5_7 from "../project_pics/ninjagame_img7.png";
import project5_8 from "../project_pics/ninjagame_img8.png";

import project6_2 from "../project_pics/voiceidentifier_img.png";
import project6_1 from "../project_pics/voiceidentifier_img2.png";
import project6_3 from "../project_pics/voiceidentifier_img3.png";

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
      title: "Unity website game",
      description: `
        Developed a 2D game where the player can register an account and log in. They use arrow keys or WASD to control 
        the ninja character to dodge knives that are thrown from above. There is a 3 life system and the player can also 
        collect hearts that float down randomly. There is features to pause the game, control the music volume, see leaderboard 
        to see top 10 scores of all time from all players and see personal high score. 
        
        The frontend was build using Unity Engine and C# scripts and deployed as a public website with CloudFlare to make the 
        domain and to create the tunnel for the server which is installed locally on the home network. The backend is built 
        using C# (.NET Core, REST API) to handle user authentication, game state management, and leaderboard functionality, with 
        data stored in a SQL database.
      `,
      images: [  
        project5_1,
        project5_2,
        project5_3,
        project5_4,
        project5_5,
        project5_6,
        project5_7,
        project5_8,
      ],
    },

    {
      title: "Voice Identifier Application",
      description: `
        Developed a voice identifier application using Python and PyQt for the graphical user interface. The application 
        allows users to record their voice, which is then processed to extract features such as Mel-Frequency Cepstral
        Coefficients (MFCCs). These features are used to train a machine learning model that can identify and verify
        users based on their unique vocal characteristics. The application includes functionality for user registration, 
        voice recording, and real-time identification, demonstrating the integration of audio processing and machine
        `,
        images: [
          project6_1,
          project6_2,
          project6_3,
        ],
    },

    {
      title: "Multi-Level Platformer Game",
      description: `
        Developed a real-time speaker identification desktop application using Python, applying 
        machine learning and signal processing principles to build a voice recognition system. 
        The application features a two-phase pipeline: an enrollment phase where voice embeddings 
        are extracted using a pre-trained deep learning encoder (Resemblyzer) and persisted locally, 
        and an identification phase that continuously listens through the microphone and matches 
        incoming audio against saved profiles using cosine similarity. Built with a modern 
        CustomTkinter UI including live microphone volume visualisation, speaker history logging, 
        and persistent profile management across sessions. Packaged as a standalone Windows 
        executable using PyInstaller for easy distribution.
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