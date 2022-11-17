import styled from "styled-components";
import { Footer, Main, Navbar } from "./views";

const Container = styled.div`
  position: absolute;
  background: rgb(92, 184, 228);
  background: linear-gradient(
    180deg,
    rgba(92, 184, 228, 0.835171568627451) 0%,
    rgba(135, 88, 255, 0.8995973389355743) 50%,
    rgba(24, 24, 24, 0.7931547619047619) 100%
  );
  width: 100vw;
  /* height: 100vh; */
  font-family: "Ubuntu", sans-serif;
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
