import styled from 'styled-components';
import countriesDark from '../assets/countriesDark.png';
import projectIn from '../assets/PI.png';
import cinemaApp from '../assets/cinema-app.png';
import { Button, ButtonDownload, Project } from '../components';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 80%;
  /* position: relative; */
`;

const ContainerInfo = styled.div``;

const Title = styled.h1`
  color: #fff;
`;
const Text = styled.p`
  color: #fff;
`;

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid green;
`;

const ContainerProjects = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 2rem;
  grid-auto-rows: 29rem;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  margin: 1rem 0;
`;

export const Main = () => {
  return (
    <Container>
      <ContainerInfo>
        <Title>Hey, I'm Gabriel Carreño</Title>
        <Text>I'm Full Stack Developer and Computer Science student.</Text>
        <ContainerButtons>
          <ButtonDownload />
        </ContainerButtons>
      </ContainerInfo>
      <ContainerProjects>
        <Project img={projectIn} />
        <Project img={countriesDark} />
        <Project img={cinemaApp} />
      </ContainerProjects>
    </Container>
  );
};
