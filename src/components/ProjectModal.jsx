import { useState, useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((index + 1) % project.images.length);

  const prev = () =>
    setIndex((index - 1 + project.images.length) % project.images.length);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={project.images[index]} alt={project.title} />

        <button className="prev" onClick={prev}>‹</button>
        <button className="next" onClick={next}>›</button>
        <button className="close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ProjectModal;
