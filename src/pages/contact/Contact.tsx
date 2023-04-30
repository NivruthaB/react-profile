import PageHeader from "../../components/PageHeader";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";
import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <section className="about">
      <PageHeader title="Contact" description="Get in touch" />
      <StyledContactContainer>
        <ContactInfo />
        <Form />
      </StyledContactContainer>
    </section>
  );
};

export default Contact;


const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`