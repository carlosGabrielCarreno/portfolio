import styled from 'styled-components';
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
      <Project />
      <Project />
      <Project />
    </Container>
  );
};
