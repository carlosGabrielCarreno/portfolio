import styled from 'styled-components';

const Btn = styled.a`
  padding: 15px 10px;
  margin: 0;
  max-width: 470px;
  background: rgb(0, 29, 110);
  background: linear-gradient(
    162deg,
    rgba(0, 29, 110, 1) 0%,
    rgba(3, 4, 94, 0.8925770137156425) 100%
  );
  :hover {
    transition-delay: 3s;
    background: linear-gradient(
      162deg,
      rgb(0 29 110 / 57%) 0%,
      rgb(3 4 94 / 55%) 100%
    );
  }
  border: 0;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
`;

export const Button = ({ name, url }) => {
  return (
    <Btn href={url} target="_blank">
      {name}
    </Btn>
  );
};
