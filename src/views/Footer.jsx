import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerIcon = styled.div`
  margin: 1rem;
`;
export const Footer = () => {
  return (
    <Container>
      <ContainerIcon>
        <GitHubIcon />
      </ContainerIcon>
      <ContainerIcon>
        <LinkedInIcon />
      </ContainerIcon>
    </Container>
  );
};
