import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";
import React from "react";

const About = () => {
  return (
    <section className="about">
      <PageHeader title="About Me" description="A little bit" />
      <AboutMe />
    </section>
  );
};

export default About;
