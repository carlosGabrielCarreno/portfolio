import styled from 'styled-components';
import { Button } from './Button';

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
`;

export const Form = () => {
  return (
    <FormContainer>
      <Input type="text" placeholder="name" />
      <Input type="text" placeholder="email" />
      <textarea type="text" placeholder="message..." />
      <Button name={'Submit'} />
    </FormContainer>
  );
};
