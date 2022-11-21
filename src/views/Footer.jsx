import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerIcon = styled.a`
  margin: 1rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
export const Footer = () => {
  return (
    <Container>
      <ContainerIcon
        href="https://github.com/gabrielCarrenio"
        target={'_blank'}
      >
        <GitHubIcon />
      </ContainerIcon>
      <ContainerIcon
        href="https://www.linkedin.com/in/gabrielcarrenio/"
        target={'_blank'}
      >
        <LinkedInIcon />
      </ContainerIcon>
    </Container>
  );
};
