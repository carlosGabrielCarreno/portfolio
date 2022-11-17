import styled from "styled-components";
import { Project } from "../components/Project";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 80%;
  position: relative;
`;

const ContainerInfo = styled.div``;

const Title = styled.h1``;
const Text = styled.p``;

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 15px 10px;
  margin: 0 0.3rem;
  background-color: transparent;
  border: 1px solid #533483;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Main = () => {
  return (
    <Container>
      <ContainerInfo>
        <Title>Hey, I'm Gabriel Carreño</Title>
        <Text>I'm Full Stack Developer and Computer Science student.</Text>
        <ContainerButtons>
          <Button>Download CV</Button>
          <Button>Contact me</Button>
        </ContainerButtons>
      </ContainerInfo>
      <ProjectsContainer>
        <Project />
        <Project />
        <Project />
      </ProjectsContainer>
    </Container>
  );
};
