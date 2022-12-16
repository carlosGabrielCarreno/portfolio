import styled from 'styled-components';

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
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  /* width: 100%; */
  height: 12vh;
  /* border: solid red; */
  max-width: 468px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 15px 10px;
  margin: 0;
  max-width: 470px;
  background: rgb(0, 29, 110);
  background: linear-gradient(
    162deg,
    rgba(0, 29, 110, 1) 0%,
    rgba(3, 4, 94, 0.8925770137156425) 100%
  );
  border: 0;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
`;

export const Form = () => {
  return (
    <FormContainer
      action={`https://formsubmit.co/${process.env.REACT_APP_EMAIL}`}
      method="post"
    >
      <Input type="text" placeholder="name" name="user_name" />
      <Input type="text" placeholder="email" name="user_email" />
      <TextArea placeholder="message..." name="user_message" />
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};
