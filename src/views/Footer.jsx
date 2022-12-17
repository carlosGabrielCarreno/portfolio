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

const Hr = styled.hr`
  width: 90%;
`;
export const Footer = () => {
  return (
    <>
      <Hr />
      <Container>
        <ContainerIcon
          href="https://github.com/CarlosGabrielCarreno"
          target={'_blank'}
        >
          <GitHubIcon />
        </ContainerIcon>
        <ContainerIcon
          href="https://www.linkedin.com/in/carlosgabrielcarreno/"
          target={'_blank'}
        >
          <LinkedInIcon />
        </ContainerIcon>
      </Container>
    </>
  );
};
