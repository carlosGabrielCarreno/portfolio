import ErrorIcon from '@mui/icons-material/Error';
import { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.6s ease;
  margin: 2rem auto;
  & .button {
    padding: 15px 10px;
    /* border-radius: 5px; */
    margin: 0;
    max-width: 475px;
    transition: all 0.6s ease;
    border: 0;
    text-decoration: none;
    color: #fff;
    font-weight: 500;

    &.active {
      cursor: pointer;
      background: rgb(0, 29, 110);
      background: linear-gradient(
        162deg,
        rgba(0, 29, 110, 1) 0%,
        rgba(3, 4, 94, 0.8925770137156425) 100%
      );
      :hover {
        transition: all 0.4s ease-in-out;
        background: linear-gradient(
          162deg,
          rgb(0 29 110 / 57%) 0%,
          rgb(3 4 94 / 55%) 100%
        );
      }
    }
  }
  & span {
    &.alert {
      max-width: 100px;
      color: #fff;
      font-size: 12px;
      padding: 8px 4px;
      /* border-radius: 5px; */
      background: red;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Input = styled.input`
  /* width: 100%; */
  padding: 15px 10px;
  border: 0;
  max-width: 455px;
  /* border-radius: 5px; */
`;

const TextArea = styled.textarea`
  /* width: 100%; */
  height: 12vh;
  /* border: solid red; */
  max-width: 468px;
  /* border-radius: 5px; */
`;

export const Form = () => {
  const [btnActive, setBtnActive] = useState(false);
  const [isValidateEmail, setIsValidateEmail] = useState(true);

  const validateEmail = (email) => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (emailRegex.test(email)) {
      setIsValidateEmail(true);
    } else {
      setIsValidateEmail(false);
    }
  };

  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    console.log(event.target.value);

    if (event.target.name === 'email') {
      validateEmail(event.target.value);
    }

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    if (
      values.name.length > 1 &&
      values.email.length > 1 &&
      values.message.length > 1
    ) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }

    console.log(isValidateEmail);
  };

  return (
    <FormContainer
      action={`https://formsubmit.co/${process.env.REACT_APP_EMAIL}`}
      method="post"
    >
      <Input
        onChange={handleChange}
        value={values.name}
        id="email"
        type="text"
        placeholder="name"
        name="name"
      />
      <Input
        onChange={handleChange}
        value={values.email}
        type="text"
        placeholder="email"
        name="email"
      />
      <span className={`span ${!isValidateEmail ? 'alert' : ''}`}>
        {!isValidateEmail ? (
          <>
            email invalid <ErrorIcon fontSize="small" />
          </>
        ) : (
          <></>
        )}
      </span>
      <TextArea
        placeholder="message..."
        value={values.message}
        name="message"
        onChange={handleChange}
      />
      <button
        type="submit"
        disabled={!btnActive}
        className={`button ${btnActive ? 'active' : ''}`}
      >
        Submit
      </button>
    </FormContainer>
  );
};
