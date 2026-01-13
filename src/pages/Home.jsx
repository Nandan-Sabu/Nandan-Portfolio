import Toolbox from '../components/Toolbox';
import { useEffect, useState } from "react";
import { ReactComponent as ProfileIcon } from "../icons/ProfileIcon.svg"

import { ReactComponent as PythonIcon } from "../icons/pythonicon.svg"
import { ReactComponent as JavaIcon } from "../icons/javaicon.svg"
import { ReactComponent as ReactIcon } from "../icons/reacticon.svg"
import { ReactComponent as HTMLIcon } from "../icons/htmlicon.svg"
import { ReactComponent as RIcon } from "../icons/r.svg"
import { ReactComponent as CsharpIcon } from "../icons/csharp.svg"
import { ReactComponent as JavaScriptIcon } from "../icons/javascript.svg"
import { ReactComponent as SQLIcon } from "../icons/sql.svg"

import { ReactComponent as CSSIcon } from "../icons/cssicon.svg"
import { ReactComponent as JupyterIcon } from "../icons/jupyter.svg"
import { ReactComponent as ArduinoIcon } from "../icons/arduino.svg"
import { ReactComponent as RstudioIcon } from "../icons/rstudio.svg"
import { ReactComponent as VSCIcon } from "../icons/vsc.svg"
import { ReactComponent as VSIcon } from "../icons/vs.svg"
import { ReactComponent as GithubIcon } from "../icons/github.svg"
import { ReactComponent as TrelloIcon } from "../icons/trello.svg"
import { ReactComponent as TableauIcon } from "../icons/tableau.svg"
import { ReactComponent as DrawioIcon } from "../icons/drawio.svg"
import { ReactComponent as ElectronIcon } from "../icons/electron.svg"
import { ReactComponent as NodeIcon } from "../icons/nodejs.svg"
import { ReactComponent as ExpressIcon } from "../icons/express.svg"

import { ReactComponent as SQLserverIcon } from "../icons/sqlservericon.svg"
import { ReactComponent as MongodbIcon } from "../icons/mongodb.svg"
import { ReactComponent as SqliteIcon } from "../icons/sqlite.svg"

const Home = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      //Turn off for phone
      if (window.innerWidth < 768) return;

      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      setOffset({
        x: x * 45,
        y: y * 25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <section className="page">

      <div className="hero" style={{
        backgroundImage: "url('\Background.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        width: "100%"
      }}>
        <div className='hero-shade'></div>
        <div
          className="hero-content"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        >
          <h1 className="homeh1">Hi, I'm Nandan</h1>
          <p className="herotxt">Aspiring Developer and Computer Science Graduate from University of Auckland</p>
        </div>
      </div>
      <div className="aboutContainer">
        <div className="leftAbout">
          <div className='profileIcon'><ProfileIcon /></div>
          <h2>Nandan Sabu</h2>
          <p className="p1">I am a highly motivated graduate who is passionate about software development. Skilled in
            programming languages such as Python, Java and React.
            I graduated from University of Auckland with a Bachelors degree in Science, majoring in Computer Science and Information Technology Management.
            Eager to apply technical knowledge and analytical skills.
          </p>
          <p>
            With my double major, I have done projects related to database design, web development,
            end-to-end desktop applications and software development.
          </p>
        </div>
        <div className="rightAbout">
          <table>
            <tbody>
              <tr>
                <td className='headColumn'>Languages:</td>
                <td>
                  <Toolbox name='Python' icon={<PythonIcon />} />
                  <Toolbox name='Java' icon={<JavaIcon />} />
                  <Toolbox name='Reactjs' icon={<ReactIcon />} />
                  <Toolbox name='HTML' icon={<HTMLIcon />} />
                  <Toolbox name='C#' icon={<CsharpIcon />} />
                  <Toolbox name='Electron' icon={<JavaScriptIcon />} />
                  <Toolbox name='R Language' icon={<RIcon />} />
                  <Toolbox name='SQL' icon={<SQLIcon />} />
                </td>
              </tr>
              <tr>
                <td className='headColumn'>Tools Used:</td>
                <td>
                  <Toolbox name='CSS' icon={<CSSIcon />} />
                  <Toolbox name='Jupyter' icon={<JupyterIcon />} />
                  <Toolbox name='RStudio' icon={<RstudioIcon />} />
                  <Toolbox name='Electron' icon={<ElectronIcon />} />
                  <Toolbox name='Arduino' icon={<ArduinoIcon />} />
                  <Toolbox name='VS Code' icon={<VSCIcon />} />
                  <Toolbox name='Node.js' icon={<NodeIcon />} />
                  <Toolbox name='Express.js' icon={<ExpressIcon />} />
                  <Toolbox name='Visual Studio' icon={<VSIcon />} />
                  <Toolbox name='GitHub' icon={<GithubIcon />} />
                  <Toolbox name='Trello' icon={<TrelloIcon />} />
                  <Toolbox name='Tableau' icon={<TableauIcon />} />
                  <Toolbox name='Draw.io' icon={<DrawioIcon />} />
                </td>
              </tr>
              <tr>
                <td className='headColumn'>Databases:</td>
                <td>
                  <Toolbox name='SQL Server' icon={<SQLserverIcon />} />
                  <Toolbox name='MongoDB' icon={<MongodbIcon />} />
                  <Toolbox name='SQLite' icon={<SqliteIcon />} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Home;
