import CodeIcon from "@mui/icons-material/Code";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: blueviolet; */
  height: 10%;
  width: 90%;
  margin: 0 auto;
`;

const ContainerLogo = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerButtons = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0 0.3rem;
  padding: 0;
`;

export const Navbar = () => {
  return (
    <Container>
      <ContainerLogo>
        <CodeIcon />
        <Text>Full Stack Developer</Text>
      </ContainerLogo>
      <ContainerButtons>
        <Text>About me</Text>
        <Brightness4Icon />
      </ContainerButtons>
    </Container>
  );
};
