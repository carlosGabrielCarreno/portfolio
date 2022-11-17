import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: blueviolet;
  height: 10%;
  width: 100%;
`;

const ContainerLogo = styled.div``;

const ContainerButtons = styled.div``;

const Text = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

export const Navbar = () => {
  return (
    <Container>
      <ContainerLogo>
        <Text>icono</Text>
        <Text>Gabriel Carreño</Text>
      </ContainerLogo>
      <ContainerButtons>
        <Text>About me</Text>
        <Text>modo dark</Text>
      </ContainerButtons>
    </Container>
  );
};
