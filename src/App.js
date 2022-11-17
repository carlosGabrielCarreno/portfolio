import styled from "styled-components";
import { Footer, Main, Navbar } from "./views";

const Container = styled.div`
  background-color: aqua;
  width: 100vw;
  height: 100vh;
`;

export const App = () => {
  return (
    <Container>
      <Navbar />
      <Main />
      <Footer />
    </Container>
  );
};
