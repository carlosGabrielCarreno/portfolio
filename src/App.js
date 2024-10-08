import styled from 'styled-components';
import { Form } from './components';
import { Footer, Main, Navbar } from './views';

const Container = styled.div`
  position: absolute;
  background: rgb(0, 11, 73);
  background: linear-gradient(
    315deg,
    rgb(0 11 73 / 73%) 0%,
    rgb(4 21 98 / 72%) 68%,
    rgb(38 102 207 / 87%) 100%
  );
  width: 100vw;
  font-family: "Karla", system-ui;
`;

export const App = () => {
  return (
    <Container>
      <Navbar />
      <Main />
      <Form />
      <Footer />
    </Container>
  );
};
