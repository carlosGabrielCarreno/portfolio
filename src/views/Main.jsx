import styled from 'styled-components';
import countriesDark from '../assets/countriesDark.png';
import projectIn from '../assets/PI.png';
import cinemaApp from '../assets/cinema-app.png';
import { ButtonDownload, Project, Sidebar } from '../components';

const Container = styled.div`
  width: 90%;
  margin: 3rem auto 5rem auto;
  height: 80%;
  /* border: solid red; */
`;

const ContainerInfo = styled.div``;

const Title = styled.h1`
  color: #fff;
`;
const Text = styled.p`
  color: #fff;
  font-weight: 500;
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
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  margin: 1rem 0;
`;

const ContainerStackTech = styled.div`
  background: linear-gradient(
    162deg,
    rgb(0 29 110 / 34%) 0%,
    rgb(3 4 94 / 16%) 100%
  );
  border-radius: 5px;
`;

export const Main = () => {
  return (
    <Container>
      <ContainerInfo>
        <Title>Hey, I'm Carlos Gabriel Carreño</Title>
        <Text>I'm Full Stack Developer and Computer Science student.</Text>
        <ContainerButtons>
          <ButtonDownload />
        </ContainerButtons>
      </ContainerInfo>
      <ContainerStackTech>
        <Text>Technologies I work with:</Text>
        <Sidebar />
      </ContainerStackTech>
      <ContainerProjects>
        <Project
          img={projectIn}
          linkDeploy={'https://github.com/gabrielCarrenio/PI-Foods'}
          linkLive={'https://pi-foods-chi.vercel.app'}
          text={
            'I carried out this project in the SoyHenry Bootcamp, in which I put into practice all the tools and theory taught in it, the Backend was carried out with technologies such as Node JS for the server, Sequelize as ORM and Postgres SQL for the database. For the entire interface structure of the project, I used React JS, Redux to handle global state, and Styled Component to style CSS. The Backend deployment was done in Railail and the Frontend in Vercel.'
          }
        />
        <Project
          img={countriesDark}
          linkDeploy={'https://github.com/gabrielCarrenio/Countries-app'}
          linkLive={'https://countri-app-react-js.netlify.app'}
          text={
            'This project is a Frontend Mentor challenge, I made all the interface structure with React JS technology and to feed data to the application I use REST Countries which provides me data for free, and to give them CSS styles I use Styled Component.'
          }
        />
        <Project
          img={cinemaApp}
          linkDeploy={'https://github.com/gabrielCarrenio/cinema-app'}
          linkLive={'https://cinema-app-ochre.vercel.app'}
          text={
            "I developed this project to gain experience using React JS technology in conjunction with Context as a way to handle global state and apply CSS Grid technology as a technique for structuring and styling the web application's UI."
          }
        />
      </ContainerProjects>
    </Container>
  );
};
