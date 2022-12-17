import styled from 'styled-components';
import htmlIcon from '../assets/tech/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-96.png';
import cssIcon from '../assets/tech/icons8-css3-96.png';
import sassIcon from '../assets/tech/icons8-sass-96.png';
import jsIcon from '../assets/tech/icons8-javascript-96.png';
import nodejsIcon from '../assets/tech/icons8-nodejs-96.png';
import reactIcon from '../assets/tech/icons8-react-a-javascript-library-for-building-user-interfaces-96.png';
import PostgresSQL from '../assets/tech/icons8-postgresql-96.png';
import gitIcon from '../assets/tech/icons8-git-96.png';

const ContainerTech = styled.aside`
  /* border: solid red; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 100%;
  margin: 0 auto;
  gap: 2rem;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  & img {
    width: 2.5rem;
  }
  @media (min-width: 600px) {
    & img {
      width: 4.5rem;
    }
    font-weight: 600;
    font-size: 14px;
  }
`;

const ContainerImg = styled.div`
  /* border: solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.2rem 0.2rem 0;
`;

export const Sidebar = () => {
  return (
    <ContainerTech>
      <ContainerImg>
        <img src={htmlIcon} alt="html icon" />
        <span>HTML5</span>
      </ContainerImg>
      <ContainerImg>
        <img src={cssIcon} alt="css icon" />
        <span>CSS</span>
      </ContainerImg>
      <ContainerImg>
        <img src={sassIcon} alt="sass icon" />
        <span>Sass</span>
      </ContainerImg>
      <ContainerImg>
        <img src={jsIcon} alt="javascript icon" />
        <span>Javascript</span>
      </ContainerImg>
      <ContainerImg>
        <img src={nodejsIcon} alt="node js icon" />
        <span>Node JS</span>
      </ContainerImg>
      <ContainerImg>
        <img src={reactIcon} alt="react icon" />
        <span>React JS</span>
      </ContainerImg>
      <ContainerImg>
        <img src={PostgresSQL} alt="postgres sql icon" />
        <span>Postgres SQL</span>
      </ContainerImg>
      <ContainerImg>
        <img src={gitIcon} alt="git icon" />
        <span>Git</span>
      </ContainerImg>
    </ContainerTech>
  );
};
