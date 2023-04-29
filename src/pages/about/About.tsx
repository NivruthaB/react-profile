import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";
import React from "react";

interface IAboutProps {
  name: any,
  location: string,
  brand: any,
  email: any,
  availability: any
}
const About = ({ name, location, brand, email, availability }: IAboutProps) => {
  return (
    <section className="about">
      <PageHeader title="About Me" description="A little bit" />
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} />
    </section>
  );
};

export default About;
