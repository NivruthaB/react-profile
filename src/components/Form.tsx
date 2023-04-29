import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { send } from "emailjs-com";
const Form = () => {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: "4f412a8f-0a11-4ba9-8e37-e12661f36602",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    const senderName = formData.name;
    const senderEmail = formData.email;
    const senderSubject = formData.subject;
    const message = formData.message;
    e.preventDefault();
    send('service_qloeq88',
      'template_9sz6ztu',
      { sender_name: senderName, sender_email: senderEmail, message, sender_subject: senderSubject },
      'g7T90-400JkwB0cyM'
    ).then((response) => {
      setSuccess(true);
    }).catch((err) => {
      setSuccess(false);
    })
  };

  return (
    <FormContainer
    >
      <StyledFormControl style={{ display: "inline-block" }}>
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.name}
          id="contactName"
          name="name"
          placeholder="Name"
          required
        />
      </StyledFormControl>
      <StyledFormControl style={{ display: "inline-block", marginLeft: '45px' }}>
        <input
          type="email"
          className="formControl"
          onChange={handleChange}
          value={formData.email}
          id="contactEmail"
          name="email"
          placeholder="Email"
          required
        />
      </StyledFormControl>
      <StyledFormControl >
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
        />
      </StyledFormControl>
      <StyledFormControl>
        <textarea
          className="formControl"
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows={3}
          placeholder="Message"
          required
        ></textarea>
      </StyledFormControl>
      <div >
        <StyledButton onClick={handleSubmit}
          whileHover={{ boxShadow: '3px 4px 1px var(--hl-color)', opacity: 1, transition: { duration: 0.3 } }}>
          {success ? "Message Sent" : "Say Hello"}
        </StyledButton>
      </div>
    </FormContainer >
  );
};

export default Form;

const StyledButton = styled(motion.button)`
    white-space: nowrap;
    color: var(--hl-color);;
    background-color: transparent;
    border: solid 1px var(--hl-color);;
    display: flex;
    justify-content: center;
    padding: 10px 10px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
    margin-top: 30px;
    &:hover{
        opacity: 1;
    }
`
const FormContainer = styled(motion.div)`
  width: 400px;
  position: absolute;
  left: 10%;  
  margin-top: 35px;
  transform: translateX(600px);
  transition:0.6s ease-in-out;
  @media (max-width: 1082px) {
    position: unset;
    display:flex;
    flex-direction: column;
    transform: none;
  }

  @media (max-width: 450px) {
    width: 300px;
  }
`

const StyledFormControl = styled.div`
  .formControl{
    font-size: 15px;
    width: 100%;
    padding: 10px 10px;
    border: none;
    background-color: var(--bg-color);
    margin-bottom: 20px;
    border-bottom: 1px solid var(--grey);
    border-radius: 1px;
    outline: transparent;
    color: var(--secondary-text-color);
  }
  .formControl:focus {
    border-bottom: 1px solid var(--hl-color);
  }

  @media (max-width: 1082px) {
    margin-left: 0 !important;
  }
`