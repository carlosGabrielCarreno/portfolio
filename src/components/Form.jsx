import { useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormContainer = styled.form`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 2rem auto;
`;

const Input = styled.input`
  /* width: 100%; */
  padding: 15px 10px;
  border: 0;
  max-width: 455px;
`;

const TextArea = styled.textarea`
  /* width: 100%; */
  height: 12vh;
  /* border: solid red; */
  max-width: 468px;
`;

const Button = styled.button`
  padding: 15px 10px;
  margin: 0;
  max-width: 470px;
  background: rgb(83, 52, 131);
  background: linear-gradient(
    146deg,
    rgba(83, 52, 131, 0.43599438066242124) 0%,
    rgba(0, 0, 0, 0.371568610354298) 100%
  );
  border: 0;
  cursor: pointer;
  color: #fff;
`;

export const Form = () => {
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.send(
      'service_oojog7a',
      'template_h88fllp',
      form.current,
      'lfEj21xN0KYs5jFnn'
    );
  };

  return (
    <FormContainer ref={form} onSubmit={sendEmail}>
      <Input type="text" placeholder="name" name="user_name" />
      <Input type="text" placeholder="email" name="user_email" />
      <TextArea placeholder="message..." name="user_message" />
      <Button>Submit</Button>
    </FormContainer>
  );
};
