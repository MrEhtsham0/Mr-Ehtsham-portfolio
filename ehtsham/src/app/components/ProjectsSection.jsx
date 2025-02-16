"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next Js Portfolio",
    description: "Portfolio which has my Professional Information,Projects and Experience",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MrEhtsham0/Mr-Ehtsham-portfolio/tree/main/ehtsham",
    previewUrl: "https://github.com/MrEhtsham0/Mr-Ehtsham-portfolio/tree/main/ehtsham",
  },
  {
    id: 2,
    title: "Vocal Molder",
    description: "Convert Text to Voice,Voice to Text,Video Voice Over in Multi-Language using Python Deep Learning",
    image: "/images/projects/vocalmolder.png",
    tag: ["All", "AI"],
    gitUrl: "https://vocalmolder-frontend.vercel.app/",
    previewUrl: "https://vocalmolder-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Project Automation using Agentic AI",
    description: "Project Automation using Agentic AI(LangChain & LangGraph)",
    image: "/images/projects/Agent.jfif",
    tag: ["All", "AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Ai Chatbots RAG Apps + Vector Databases",
    description: "Project 4 description",
    image: "/images/projects/rag.png",
    tag: ["All", "AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "ECG Detector using TensorFlow+Next JS",
    description: "Deep Learning Model which Detect ECG Diseases using ECG Signals files and ECG images",
    image: "/images/projects/ecg-3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Plant Disease Detection Model using Transfer Learning",
    description: "Model which Detect Plant's Diseases using Transfer Learning",
    image: "/images/projects/cnn.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MrEhtsham0/PlantsVillage_Classification",
    previewUrl: "https://github.com/MrEhtsham0/PlantsVillage_Classification",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
