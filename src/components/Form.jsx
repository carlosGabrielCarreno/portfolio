import { useRef } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
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
`;

const TextArea = styled.textarea`
  /* width: 100%; */
  height: 12vh;
  /* border: solid red; */
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
      <Button name={'Submit'} />
    </FormContainer>
  );
};
