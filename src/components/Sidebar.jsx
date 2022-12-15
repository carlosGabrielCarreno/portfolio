import styled from 'styled-components';
import htmlIcon from '../assets/tech/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-96.png';
import cssIcon from '../assets/tech/icons8-css3-96.png';
import reactIcon from '../assets/tech/icons8-react-a-javascript-library-for-building-user-interfaces-96.png';
import nodejsIcon from '../assets/tech/icons8-nodejs-96.png';
import jsIcon from '../assets/tech/icons8-javascript-96.png';
import gitIcon from '../assets/tech/icons8-git-96.png';
import sassIcon from '../assets/tech/icons8-sass-96.png';

const ContainerTech = styled.aside`
  /* border: solid red; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 90%;
  margin: 2rem auto;
  & img {
    width: 2.5rem;
  }
  @media (min-width: 600px) {
    & img {
      width: 4.5rem;
    }
  }
`;

export const Sidebar = () => {
  return (
    <ContainerTech>
      <img src={htmlIcon} alt="html icon" />
      <img src={cssIcon} alt="css icon" />
      <img src={sassIcon} alt="sass icon" />
      <img src={jsIcon} alt="javascript icon" />
      <img src={nodejsIcon} alt="node js icon" />
      <img src={reactIcon} alt="react icon" />
      <img src={gitIcon} alt="git icon" />
    </ContainerTech>
  );
};
