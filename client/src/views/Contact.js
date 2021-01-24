import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import TextArea from '../components/atoms/TextArea/TextArea';

const Title = styled(Paragraph)`
  font-weight: 600;
  font-size: 2rem;
`;

const Little = styled(Paragraph)`
  font-weight: 600;
  font-size: 1.6rem;
  font-style: italic;
`;

const Info = styled(Paragraph)`
  font-weight: 600;
  font-size: 2rem;
`;

const Contactarea = styled.div`
  margin: 0 auto;
  width: 10%;
  top: 0px;
  display: block;
`;

const Contactinfo = styled.div`
  height: 100%;
  width: 40%;
  margin-left: 30px;
  float: left;
`;

const main = styled.div`
  display: flex;
  right: 60px;
`;

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template', e.target, 'user_ooByLRGkFNVhkAwvntQja').then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    },
  );
  e.target.reset();
}

const Contact = () => (
  <main>
    <Contactinfo>
      <Info>Telephone contact:</Info>
      <Info>XXX-XXX-XXX</Info>
      <Little>Mon-Fri: 08:00-20:00</Little>
      <Little>Sat-Sun: 09:00-16:00</Little>
      <Info>E-mail</Info>
      <Little>project.electroshop@gmail.com</Little>
    </Contactinfo>
    <Contactarea>
      <form className="contact-form" onSubmit={sendEmail}>
        <Title>Full Name</Title>
        <Input name="name" />

        <Title>Email</Title>
        <Input name="email" />
        <Title>Description</Title>
        <TextArea description name="message" style={{ border: '1px solid black' }} />
        <Button style={{ marginTop: '10px', marginBottom: '10%' }} type="submit" value="Send">
          Send
        </Button>
      </form>
    </Contactarea>
  </main>
);
export default Contact;
