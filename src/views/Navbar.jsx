import CodeIcon from '@mui/icons-material/Code';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: solid red; */
  height: 8vh;
  width: 90%;
  margin: 0 auto;
`;

const ContainerLogo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerButtons = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0 0.3rem;
  padding: 0;
  cursor: pointer;
`;

export const Navbar = () => {
  return (
    <Container>
      <ContainerLogo>
        <CodeIcon />
        <Text>Full Stack Developer</Text>
      </ContainerLogo>
      <ContainerButtons>
        <Text>Contact me</Text>
      </ContainerButtons>
    </Container>
  );
};
