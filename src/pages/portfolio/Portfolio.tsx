// import projectData from "./projectsData.json";
// import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";
import React from "react";
const Portfolio = () => {

  return (
    <section className="portfolio">
      <PageHeader title="Portfolio" description="View my work" />
      <div className="row">
        {/* {projectData.map((project, i) => (
          <Project
            key={i}
            id={project.id}
            title={project.title}
            technologies={project.technologies}
            image={project.image}
            color={project.bgcolor}
            github={project.github}
            deployed={project.deployed}
            description={project.description}
          />))} */}
      </div>
    </section>
  );
};

export default Portfolio;
