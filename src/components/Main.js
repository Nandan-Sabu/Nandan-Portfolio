import { useEffect, useState } from "react";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Main = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNav(true); // scrolling up
      } else {
        setShowNav(false); // scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`navbar ${showNav ? "show" : "hide"}`}>
        <a href="#home" className="nav">Home</a>
        <a href="#projects" className="nav">Projects</a>
      </nav>

      <section id="home" className="page">
        <Home />
      </section>

      <section id="projects" className="page">
        <Projects />
      </section>
    </>
  );
};

export default Main;


// import Home from '../pages/Home';
// import Projects from '../pages/Projects';

// const Main = () => {
//   return (
//     <>
//       <nav className="navbar">
//         <a href="#home" className="nav">Home</a>
//         <a href="#projects" className="nav">Projects</a>
//       </nav>

//       <section id="home" className="page">
//         <Home />
//       </section>

//       <section id="projects" className="page">
//         <Projects />
//       </section>
//     </>
//   );
// };

// export default Main;

